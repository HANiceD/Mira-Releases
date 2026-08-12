# Mira Releases

Mira 的官方安装包与版本记录。

## 下载

请从 [Releases](https://github.com/HANiceD/Mira-Releases/releases) 页面下载。

- macOS Apple Silicon：`mira-<version>-arm64.dmg`
- macOS Intel：`mira-<version>-x64.dmg`
- Windows x64 内测：`mira-<version>-Setup.exe`

每个版本都会同时提供 SHA-256 校验值。Windows 安装包在获得可信签名前只作为内测版提供，不视为正式稳定发布。

## 更新公告

`notices/versions/` 保存客户端内展示的中英文公告，`notices/assets/` 保存每个版本独享的
4:1 Mira 场景横幅。每个版本必须同时提供公告与横幅；发布前运行：

```bash
node scripts/build-notice-bundle.mjs --out /tmp/mira-notices
```

该命令会检查公告结构、双语内容、横幅文件和 4:1 比例，并生成 macOS Apple 芯片、
macOS Intel 与 Windows x64 共用的部署目录。

## 源代码与问题反馈

- 源代码：[HANiceD/Mira](https://github.com/HANiceD/Mira)
- 问题反馈：[Issues](https://github.com/HANiceD/Mira-Releases/issues)
