# Mira 0.1.30

这一版带来可选本机插件引擎与任务中途插话，新增任务收件箱与稍后处理，并完善伙伴未读话题直达、重启防重回滚及群聊记忆。桌面小组件、托盘与手机用量概览、换引擎或换电脑无感接续、多通道远程连接与本地数据库损坏隔离也一并升级。手机端需安装新版安装包。

## 可选本机插件引擎与任务中途插话

桌面端支持接入可选本机插件引擎：除内置的 Claude Code、Codex 与 Pi 外，可按需安装可选插件使用 DeepSeek 引擎、Antigravity 引擎与 ZCode 引擎。三款引擎仅在当前这台电脑本机运行，需自行在本机安装并登录对应官方命令行工具（或配置相应 API Key），可在新建任务时直接选用、查看可用余额或用量，也可在协同中作为普通 Worker 参与分工（第三方名称与图标归各自原方所有）。支持回合内插话的插件引擎（如配合 Antigravity CLI 1.5 及以上正式版的 Antigravity 引擎）可在当前这一轮运行中途直接补充或调整指令；不支持插话的引擎会自动将消息排入队列并在当前一轮结束后发送。Antigravity 引擎同时支持调用本机 Mira HTTP MCP 工具，并修复 Windows 后台刷新用量时弹出更新窗口的问题。

## 任务收件箱、稍后处理与自动化归组

新增任务收件箱模式：桌面端将鼠标悬停或聚焦在左侧栏「全部任务」标题行时，可点击右侧收件箱按钮切换；手机端可在更多菜单首行直接切换。收件箱按「待处理」「进行中」「稍后处理」「已处理」整理多台电脑上的任务，并保存独立于普通任务列表的筛选条件；暂时顾不上的任务可设为今晚、明天、下周或自定义时间稍后处理，到点或收到新消息时自动回到待处理。跨项目的自动化按真实计划身份合并归组并按待关注状态排序，将仍有后续计划的自动化标为完成时仅清除未读状态，不会停止或归档计划。

## 伙伴未读话题直达、重启保护与群聊体验完善

伙伴主对话顶部新增未读话题提示条，有话题收到新回复时可一键打开最新未读话题面板；左侧伙伴状态点悬停会注明未读话题数量，在主对话发送消息即自动推进已读位置，伙伴行右键菜单也可手动「标为已读」。伙伴运行环境「重新开始」增加并发合并与短时间防重保护，避免连点或网络重试造成反复空重建；重启失败时自动解除本次恢复暂停并继续派发排队消息，不影响手动停止的暂停状态。伙伴群聊在共享项目记忆的同时保留每位伙伴各自的技能与个人记忆，引用消息、话题首帖与已选附件随当轮一并送达；群侧栏话题预览可准确定位目标回复且未读角标不再遮挡文字，长文本粘贴自动折叠为标签并在草稿与复制分享中保留全文。

## 项目克隆与多目录、无感切换引擎或电脑及协同路线预设

桌面端与手机端统一新建项目入口，首次创建前提供简要引导，支持自动分配不冲突的工作目录、通过 HTTPS 或 SSH 克隆 GitHub 与 GitLab 仓库、为同一项目添加多个目录并自动匹配工作区图标，也可跨登录同一账号的电脑查看与归档项目。在任务内切换引擎或改由同一账号下的其他电脑继续时不再弹出确认框，下一条消息会自动按目标模型的上下文窗口重放历史记录，超出窗口时注明覆盖范围。协同中的主控任务可预先为 Worker 指定下一轮引擎、模型与运行位置；开启模型组故障自动切换时可在组内本机候选间继续运行。归档任务默认保留未发送草稿与 worktree 未提交改动快照（也可显式勾选丢弃），并支持可选由辅助模型为新 worktree 自动生成简短英文目录名。

## 桌面小组件、托盘用量卡片与手机用量概览

macOS 14 及以上新增桌面配额与每日用量小组件，仅在放置到桌面后按需更新，切换账号时自动清空旧读数；Windows 新增系统托盘悬停用量卡片，并与 macOS 菜单栏用量面板统一展示多柱进度与低额提醒，面板收起时不后台轮询。手机端新增用量概览页、侧栏抽屉用量卡与添加系统小组件指引。订阅与任务界面补充显示官方 Claude 套餐名称与旧 Codex 任务绑定账号的配额，Codex 启动时不再等待额度展示读取，同时区分对话与辅助模型消耗，并校准实时流式输出速度、推理占比与单轮完成耗时。

## 插件任务控制、按标签安装更新与官方插件升级

插件支持按指定 GitHub Release 标签安装、在打开插件设置时自动检查可用更新，并以进度环展示下载、解压与等待确认状态；已安装插件升级时保持原有授权范围不自动扩权，未配置全局模型时也不再阻断插件普通工具。经显式批准的插件可在输入框上方提供单行快捷控件，或参与管理当前任务的排队消息、暂停恢复、重试与上下文压缩，以及本机 Claude Code 与 Pi 工具执行前后检查。配套升级多款官方插件：GitHub 插件支持在 PR 卡片上直接开启定时跟进、在本机关注 PR、Issue 与 Actions 状态变化（切换账号或遇限流时严格核验身份），并将复制链接按钮移至标题旁；通讯录插件支持姓名拼音搜索并修复中文选词；QQ 邮箱等 IMAP 邮箱插件补齐回复草稿的父邮件引用字段。

## 图片输入调整、代码预览与日常输入截图改进

移除旧版外部识图转换桥接，不能看图的模型不再自动获得图片描述；原生支持看图的模型、图片附件传输与历史消息展示不受影响。连接官方 Google API Key 时可按需勾选一并用于生图，并补充 OpenCode Go 多模态模型识别与新版 xAI 生图参考能力。新增 Solidity（.sol）文件预览与语法高亮，文件树支持复制文件夹路径并安全浏览项目内符号链接目录，大体积媒体另存采用流式写入避免中断损坏原文件；输入框改进中文编号列表、多行列表换行与 Pi 已加载包技能的斜杠补全。macOS 全屏空间下截图不再跳回桌面 1，截图选区支持按空格选整窗、按回车选界面元素；macOS 动态壁纸优化解码不再阻止屏幕休眠，右侧隐藏的浏览器标签页自动静音。

## 远程多通道连接、手机分享接收与通知图标焕新

升级远程设备多通道连接与分块并发传输，停止运行、权限确认等实时交互使用独立通道不再被后台目录读取拖慢，连接拓扑实时展示直连或中转协议与延迟；远程新建任务在弱网或回执丢失时自动核对去重，避免重复创建或丢失草稿，已授权的共享任务访客也可复制任务链接与查看进度。手机通知来源小图标统一换为 Mira 新形象，增强系统分享菜单传入图片、文件与文字的识别和接收稳定性，实时活动过期后自动收起陈旧标题与计数，改进长权限卡片滚动与底部固定操作栏，并修复 Android 16KB 内存页对齐兼容与手机远程桌面触屏缩放坐标偏移。

## 本地数据库损坏隔离、多屏隐私保护与运行稳定性修复

新增运行期本地数据库损坏隔离保护：检测到损坏时按当前账号立即停止写入并保留已完成记录，防止损坏扩散或波及其他账号，同时提供重试打开与复制技术细节入口。Windows 多显示器远程控制逐屏校验隐私遮罩排除采集，任一显示器未生效时不误报隐私遮罩已开启；代输入支持多位验证码逐格填入并在网页域名或表单变化时立即中止；macOS 与 Windows 开机自启动状态识别及外接显示器断开处理更准确。修复账号服务暂时不可达时误判退出登录、工具授权过期阻塞定时任务与 PR 跟进唤醒、Codex 内置助手异常后恢复、协同未完任务重建续跑、语音通话空回复收尾及 Windows 规范路径兼容等问题。

---

手机端包含原生更新，需安装新版安装包才能获得全部改动。

---

# Mira 0.1.30

This release adds optional local plugin engines and mid-turn steering, introduces Task Inbox with snoozing, and improves unread companion topic navigation, restart protection and group chat memory. Desktop widgets, the tray usage card, mobile usage overview, seamless engine or computer handoffs, multi-channel remote connections and database corruption isolation are also upgraded. Mobile users need to install the new app build.

## Optional local plugin engines and mid-turn steering

Desktop now supports optional local plugin engines alongside built-in Claude Code, Codex and Pi, letting you install optional plugins for the DeepSeek engine, Antigravity engine and ZCode engine. Each engine runs locally on this computer only and requires installing and signing in to its official CLI (or configuring its API key) on the same machine; you can pick them when starting tasks, check available balance or usage, and assign them as ordinary Workers in collaboration (third-party names and icons belong to their respective owners). Plugin engines that declare mid-turn steering support—such as the Antigravity engine with Antigravity CLI 1.5 or later stable releases—let you steer an active turn directly without restarting, while engines without steering queue messages automatically for the next turn. The Antigravity engine also exposes local Mira HTTP MCP tools and suppresses console updater pop-ups during background usage refreshes on Windows.

## Task Inbox, snoozing and grouped automations

A new Task Inbox mode organizes tasks across your computers into Pending, Working, Snoozed and Processed sections with filters independent from the standard task list: hover or focus the All tasks header row in the desktop sidebar to reveal the Inbox toggle on the right, or switch from the top of the More menu on mobile. Tasks you cannot handle right away can be snoozed until this evening, tomorrow, next week or a custom time, returning to Pending automatically when the timer expires or new activity arrives. Automations across projects now group by schedule identity and sort by attention state, and marking an active automation Done clears its unread state without stopping or archiving the schedule.

## Unread companion topics, restart protection and group chat refinements

Companion main chats now show an unread-topic banner at the top that opens the latest unread thread in one click; hovering a companion's status dot shows the unread topic count, sending a message advances your read position automatically, and the right-click menu adds Mark as read. Restarting a companion deduplicates rapid or concurrent requests so retries no longer trigger empty rebuild loops, and automatically releases the temporary restart pause if a restart fails while preserving manual stops. Companion group projects keep each companion's personal skills and memory alongside shared project memory, deliver quoted messages, thread roots and selected attachments with the turn, jump accurately from sidebar thread previews without badge overlap, and fold long pasted text into a compact chip while preserving the full text in drafts, copies and shares.

## Repository cloning, seamless engine or computer handoff and Worker routing

Desktop and mobile share a unified New Project flow with a brief first-time guide, automatic conflict-free folder allocation, direct HTTPS or SSH cloning from GitHub and GitLab, multi-directory projects, automatic workspace icon matching and cross-computer project viewing and archiving under the same account. Switching engines or moving a task to another computer on your account no longer prompts for confirmation, replaying conversation history automatically within the target model's context window on your next message and noting coverage when history exceeds the window. Collaboration leads can stage a Worker's engine, model and run location for its next turn, and local model groups with failover enabled can switch across candidates on failure. Archiving preserves unsent drafts and uncommitted worktree snapshots by default (with an explicit option to discard), alongside an optional setting to name new worktrees automatically.

## Desktop widgets, tray usage card and mobile usage overview

macOS 14 and later add desktop quota and daily usage widgets that refresh on demand only when placed and clear automatically on account switch, while Windows adds a system-tray hover usage card unified with the macOS menu-bar panel without polling while hidden. Mobile adds a dedicated Usage screen, a drawer usage card and a guide for adding system widgets. Subscription and task views now display official Claude plan names and bound-account quotas on earlier Codex tasks, skip waiting on display-quota reads when starting Codex, separate chat and auxiliary model usage, and report live streaming speed, reasoning share and completed turn duration more accurately.

## Plugin task controls, tag-based updates and official plugin upgrades

Plugins now support installing from an exact GitHub Release tag, checking for updates automatically when opening plugin settings, and showing live download, extraction and approval progress rings; upgrading an installed plugin preserves its existing permissions without automatic expansion, and ordinary plugin tools are no longer blocked when no global model is configured. With explicit approval, plugins can render a single-row control bar above the composer, manage a task's queued messages, pause, resume, retry and compaction, or hook into local Claude Code and Pi tool execution. Official plugins are also updated: the GitHub plugin adds scheduled follow-ups from PR cards, local status watches for PRs, issues and Actions with strict account verification across rate limits, and a copy-link button beside PR titles; Contacts adds pinyin name search and smoother Chinese IME composition; and QQ Mail and other IMAP mail plugins preserve parent-message references in reply drafts.

## Image input change, code preview and everyday editing and capture

The legacy external image-description bridge has been removed, so models without native image input no longer automatically receive generated image descriptions; models with native vision, image attachments and message history remain unaffected. Connecting an official Google API key now offers an opt-in toggle to reuse it for image generation, alongside OpenCode Go multimodal detection and updated xAI image reference support. Preview and syntax highlighting now cover Solidity (.sol) files, the file tree supports copying folder paths and browsing internal symlinked directories safely, large media saves stream atomically without corrupting existing files on interruption, and the composer improves Chinese numbered lists, multi-line list wrapping and slash completion for loaded Pi package skills. On macOS, full-screen region capture stays in the current Space with Spacebar window selection and Enter element selection, dynamic wallpapers no longer prevent display sleep, and hidden browser tabs mute audio automatically.

## Multi-channel remote connections, mobile share sheet and notification icons

Remote connections upgrade to multi-channel transport with pipelined chunk uploads, giving real-time actions such as Stop and permission prompts a dedicated lane unblocked by background directory reads while showing live UDP or WebSocket paths and latency in the topology view. Starting remote tasks deduplicates across weak networks or lost receipts without dropping drafts, and authorized guests in shared tasks can copy task links and check progress. On mobile, notification small icons adopt Mira's new portrait, incoming system shares handle photos, files and text more reliably, expired Live Activities clear stale titles and counts automatically, long permission cards keep action buttons pinned while scrolling, and Android 16KB page alignment and remote-desktop touch scaling offsets are fixed.

## Database corruption isolation, multi-display privacy and reliability fixes

Runtime database corruption protection now isolates affected local data per account as soon as corruption is detected, stopping queued writes while keeping completed records intact and providing clear reopen and technical-details actions. Windows multi-monitor remote control verifies privacy-screen capture exclusion on every display before reporting privacy protection active, input handoff fills multi-digit verification codes character by character and aborts immediately if the domain or form changes, and login-item status detection and external-display disconnects are handled more accurately. Fixes also cover preserving sign-in state when account services are temporarily unreachable, unblocking scheduled runs and PR follow-ups from stale tool authorizations, recovering failed built-in Codex helpers, resuming unfinished collaboration assignments across runtime rebuilds, finishing empty voice-call turns cleanly and canonicalizing Windows paths.

---

The mobile app includes native updates and requires installing the new app build to receive all changes.
