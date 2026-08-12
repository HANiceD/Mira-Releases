#!/usr/bin/env node

import { copyFile, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const versionsDir = path.join(repoRoot, 'notices', 'versions');
const assetsDir = path.join(repoRoot, 'notices', 'assets');
const platforms = ['darwin-arm64', 'darwin-x64', 'win32-x64'];

function fail(message) {
  throw new Error(`release notice validation failed: ${message}`);
}

function compareVersions(left, right) {
  const a = left.split('.').map(Number);
  const b = right.split('.').map(Number);
  for (let index = 0; index < Math.max(a.length, b.length); index += 1) {
    const delta = (a[index] ?? 0) - (b[index] ?? 0);
    if (delta !== 0) return delta;
  }
  return 0;
}

function webpDimensions(bytes) {
  if (bytes.toString('ascii', 0, 4) !== 'RIFF' || bytes.toString('ascii', 8, 12) !== 'WEBP') {
    fail('banner is not a WebP file');
  }

  let offset = 12;
  while (offset + 8 <= bytes.length) {
    const chunk = bytes.toString('ascii', offset, offset + 4);
    const size = bytes.readUInt32LE(offset + 4);
    const data = offset + 8;
    if (data + size > bytes.length) fail('banner has a truncated WebP chunk');

    if (chunk === 'VP8X' && size >= 10) {
      return {
        width: bytes.readUIntLE(data + 4, 3) + 1,
        height: bytes.readUIntLE(data + 7, 3) + 1,
      };
    }
    if (chunk === 'VP8 ' && size >= 10) {
      return {
        width: bytes.readUInt16LE(data + 6) & 0x3fff,
        height: bytes.readUInt16LE(data + 8) & 0x3fff,
      };
    }
    if (chunk === 'VP8L' && size >= 5 && bytes[data] === 0x2f) {
      const bits = bytes.readUInt32LE(data + 1);
      return {
        width: (bits & 0x3fff) + 1,
        height: ((bits >>> 14) & 0x3fff) + 1,
      };
    }
    offset = data + size + (size % 2);
  }
  fail('banner WebP dimensions are missing');
}

function validateLocale(version, locale, content) {
  if (content == null || typeof content !== 'object') fail(`${version} is missing ${locale}`);
  if (typeof content.intro !== 'string' || content.intro.trim() === '') {
    fail(`${version} ${locale} intro is empty`);
  }
  if (!Array.isArray(content.topics) || content.topics.length === 0) {
    fail(`${version} ${locale} topics are empty`);
  }
  for (const [index, topic] of content.topics.entries()) {
    if (
      topic == null ||
      typeof topic.id !== 'string' || topic.id.trim() === '' ||
      typeof topic.title !== 'string' || topic.title.trim() === '' ||
      typeof topic.text !== 'string' || topic.text.trim() === ''
    ) {
      fail(`${version} ${locale} topic ${index + 1} is incomplete`);
    }
  }
}

async function loadAndValidateNotices() {
  const filenames = (await readdir(versionsDir))
    .filter((name) => /^\d+\.\d+\.\d+\.json$/.test(name));
  if (filenames.length === 0) fail('no version JSON files found');

  const notices = [];
  for (const filename of filenames) {
    const version = filename.slice(0, -'.json'.length);
    const filePath = path.join(versionsDir, filename);
    const notice = JSON.parse(await readFile(filePath, 'utf8'));
    if (notice.version !== version) fail(`${filename} contains version ${notice.version ?? '<missing>'}`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(notice.date ?? '')) fail(`${version} has an invalid date`);

    const expectedBanner = `../assets/v${version}-4x1.webp`;
    if (notice.banner?.url !== expectedBanner) {
      fail(`${version} banner must be ${expectedBanner}`);
    }
    for (const locale of ['zh-CN', 'en']) {
      if (typeof notice.banner?.altByLocale?.[locale] !== 'string' ||
          notice.banner.altByLocale[locale].trim() === '') {
        fail(`${version} banner alt text is missing for ${locale}`);
      }
      validateLocale(version, locale, notice.contentByLocale?.[locale]);
    }

    const bannerPath = path.join(assetsDir, `v${version}-4x1.webp`);
    const dimensions = webpDimensions(await readFile(bannerPath));
    if (Math.abs(dimensions.width / dimensions.height - 4) > 0.01) {
      fail(`${version} banner is ${dimensions.width}x${dimensions.height}, expected 4:1`);
    }
    notices.push({ version, filename, source: filePath, notice });
  }

  notices.sort((a, b) => compareVersions(a.version, b.version));
  return notices;
}

async function buildBundle(outDir, notices) {
  const resolvedOut = path.resolve(outDir);
  if (resolvedOut === path.parse(resolvedOut).root || resolvedOut === repoRoot) {
    fail('refusing to replace an unsafe output directory');
  }
  await rm(resolvedOut, { recursive: true, force: true });
  await mkdir(path.join(resolvedOut, 'assets'), { recursive: true });

  for (const { version } of notices) {
    await copyFile(
      path.join(assetsDir, `v${version}-4x1.webp`),
      path.join(resolvedOut, 'assets', `v${version}-4x1.webp`),
    );
  }

  const index = `${JSON.stringify(notices.map(({ version }) => version), null, 2)}\n`;
  for (const platform of platforms) {
    const platformDir = path.join(resolvedOut, platform);
    await mkdir(platformDir, { recursive: true });
    await writeFile(path.join(platformDir, 'index.json'), index);
    for (const { filename, source } of notices) {
      await copyFile(source, path.join(platformDir, filename));
    }
  }
}

const notices = await loadAndValidateNotices();
const outFlag = process.argv.indexOf('--out');
if (outFlag >= 0) {
  const outDir = process.argv[outFlag + 1];
  if (!outDir) fail('--out requires a directory');
  await buildBundle(outDir, notices);
}
console.log(`release notices: ${notices.map(({ version }) => version).join(', ')} validated`);
