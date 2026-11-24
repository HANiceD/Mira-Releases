# Mira v0.1.31

![初冬早晨，Mira 坐在成都社区公园的长凳上，手里的望远镜放到腿上，抬眼看低枝上的小鸟。](https://raw.githubusercontent.com/HANiceD/Mira-Releases/main/notices/assets/v0.1.31-4x1.webp)

插件引擎现在可以在提问时停下来等你回答，也能用于伙伴和派工。新版还带回桌面排队消息，加入 GLM-5.4 支持与 ZCode 同账号跨电脑工作区，并改善文件预览、收件箱和远程连接。手机端需安装新版应用。

## 本版摘要

- 插件引擎会停下来等你回答
- 伙伴和派工可选插件引擎
- 用 ZCode 处理另一台电脑上的工作区
- 新增 GLM-5.4 支持
- 三款引擎更新，两款可选插件加入
- 桌面排队消息恢复显示，收件箱更好整理
- 在桌面侧栏浏览和预览文件
- 手机连接更稳，Android 表格选字更顺畅
- 手机远程控制电脑更顺手

## 完整变更

### 插件引擎会停下来等你回答

DeepSeek、Antigravity 和 ZCode 引擎需要你做决定时，会在 Mira 里显示提问卡并暂停，等你选好或填入自己的答案再继续。协同任务也会提示哪个成员在等回答，点一下就能打开对应任务。

### 伙伴与派工可选插件引擎

可以把可用的插件引擎模型设为伙伴的默认模型，也可以在派工、安排定时执行或调整分工时选用。新建任务也会保留已选的模型与引擎，伙伴支持模型组，手机和正在控制另一台电脑的桌面端也能选择那台电脑上的模型组。

### 用 ZCode 处理另一台电脑上的工作区

在登录同一 Mira 账号的电脑之间，可以从当前设备发起 ZCode 任务，并在另一台电脑的工作区里读文件、修改和运行命令。运行 ZCode 的电脑仍需安装并登录对应引擎，选择工作区时会显示可用位置。

### 新增 GLM-5.4，模型列表更可靠

本版加入 GLM-5.4 的客户端支持，可用型号以所连接的服务为准。Codex 或其他本机订阅的模型列表遇到临时断网或刷新失败时会保留已验证的选项，Mira 也会更清楚地说明额度耗尽、账号不可用和 Gemini 暂时限速等情况。Copilot 新型号、Gemini 目录与价格、OpenCode Zen 的图片识别和 xAI 余额耗尽后的备用模型也有更新。

### 三款引擎插件更新

Antigravity 引擎 0.4.3 新增三款 Orchestrator 模型的中文和英文说明，帮你看懂规划和执行如何配合。它还支持自定义引擎安装路径，并修复多张大图发送失败及退出时可能漏掉最后更新的问题。DeepSeek 引擎 0.2.1 和 ZCode 引擎 0.2.2 配合新版 Mira 支持提问卡，ZCode 还支持同账号跨电脑工作区。

### 新增可选插件 Herdr 和 AgentCompass

Herdr 控制台 0.1.115 可查看本机终端工作区和运行状态，并把变化带进 Mira 的通知与自动化。AgentCompass 0.6.1 可按工作内容分派并汇总结果，其中用于启动子任务的功能会以最高权限运行。两个插件均可按需安装。

### 桌面端再次显示排队消息

修复 0.1.30 起桌面端有消息已排队却看不见的问题，暂停和停止中的状态也会重新显示。在手机上等待回答提问卡时，仍可选中并复制队列中的正文，插件引擎在答完后继续做后台工作时也会显示真实状态。

### 收件箱整理与任务导航

伙伴主对话和置顶任务会出现在相应的收件箱分区，标为完成后会立即让出位置并选中下一项。桌面和手机各自保存收件箱与普通任务列表的显示偏好，待处理未读有提示，手机滑动标记和归档更好辨认。提问导航随浏览位置滑动，手机任务链接、切回任务后的滚动和返回、离线设备标识也一并修正。

### 侧栏内浏览和预览文件

桌面右侧栏可以浏览目录、查看缩略图，并在原处打开文件预览。Windows 的文件预览组件已换用 Mira 名称，同时修复文档附件取件及预览助手弹出控制台的问题。项目目录的远程浏览、HTML 文件链接和缺失预览资源的提示也有改进。

### 对话阅读、附件和听写

任务里的生成图片会自动载入缩略图，过长的行内代码会折行，右侧栏开合时内容会同步调整。切换电脑或模型时会保留历史消息里的图片和附件，切换到上下文较短的模型时也会更可靠地整理历史。macOS 听写保留输入法状态并更好地整理序号和换行，技能面板也支持用顿号唤起。

### 伙伴协作与定时执行

伙伴改名后会同步主对话标题，自己开的工作可自动回报，新增定时自动化默认把结果送回当前对话。伙伴可以帮你稍后处理和取回任务，记忆搜索也更容易找回多词查询的相关结果，低频使用的伙伴会定期整理记忆。一次性自动化没能按时发出时，Mira 会说明原因与补跑方式，远程完成与重新连接时也会更妥善地核对状态。

### 插件、邮件和消息渠道

可在模型设置里管理插件提供的模型来源，在更新列表检查并批量处理来自 GitHub Releases 的插件更新，插件要新增连接地址时会先征求确认。交互卡片支持把资源点选或拖入输入框，邮件回复卡更清楚地显示并核对原邮件引用，PR 卡也修复了跟进模型选择。iMessage 改进群回复、提及、定向文档投递和权限提示，Slack 工具调用及部分渠道的来源和音频提示也更准确。

### 手机连接更稳，Android 表格可连续选字

手机连接电脑时启动和恢复更快，切换网络后能更好地维持连接，大附件传输也更少挤占实时操作。Android 修复对话表格中连续选字被打断的问题，iOS 在回到前台时会用完整任务状态更新实时活动。iOS 和 Android 均需安装新版应用，才能获得这些底层改进。

### 远程桌面键盘与连接恢复

折叠屏远程键盘和触摸板新增冰蓝复古样式，手机点进受控 Mac 的输入框时更容易唤起键盘。远程连接会在部分中转不可用时自动回退，远程换电脑后会重新核对当前设备和选中的模型，桌面连接面板也可查看不同连接的流量。macOS 会提示本地网络权限问题并提供设置入口，远程隐私遮罩授权失败时也有更清楚的指引。

### 用量显示和运行恢复

桌面与手机的即时生成速度更准确，长对话的金额不会随滚动变化，断线重连时手机会保留已读到的用量，账单可保留供应商的原始币种。Claude Code 会显示服务暂不可用时的重试进度，Codex 修复部分旧任务无法接着聊的问题，Pi 和远程执行也改进了断链恢复和提示。

### 桌面启动、账号和日常操作

桌面主窗口可以更早打开，Windows 修复更新提醒时的周期性卡顿和后台命令弹窗，托盘的多列额度对齐也更整齐。登录过期的提醒会置顶，同账号可恢复时会保留桌面登录状态，离开页面后会释放媒体播放资源。窗口、文件选择、macOS 灵动岛、协同和项目工作目录也包括一批细节修复。

---

# Mira 0.1.31

Plugin engines can now pause for your answer, and you can use them with buddies and delegated work. This release also restores visible message queues on desktop, adds GLM-5.4 support and ZCode workspaces across your computers, and improves file previews, the inbox and remote connections. Mobile users need to install the new app build.

## Release highlights

- Plugin engines can pause for your answer
- Plugin engines for buddies and delegated work
- Use ZCode with a workspace on another computer
- GLM-5.4 support
- Three engine updates and two optional plugins
- Queued messages are visible again, and the inbox is easier to manage
- Browse and preview files in the desktop sidebar
- Steadier mobile connections and smoother Android text selection
- Easier remote control from your phone

## Full release details

### Plugin engines can pause for your answer

The DeepSeek, Antigravity and ZCode engines can show a question in Mira and wait while you pick an option or write your own answer. In collaborative sessions, Mira can also show which worker is waiting and take you straight to its question.

### Plugin engines for buddies and delegated work

Choose an available plugin engine model as a buddy’s default, or use one when delegating work, scheduling a run or changing a worker’s assignment. New sessions remember your chosen model and engine. Buddies also support model groups, and you can pick a model group from the computer you’re controlling, from mobile or desktop.

### Use ZCode with a workspace on another computer

Start a ZCode session from your current device and read, edit or run commands in a workspace on another computer signed into the same Mira account. The computer running ZCode still needs the engine installed and signed in, and Mira shows the available locations when you choose a workspace.

### GLM-5.4 support and a more reliable model list

This update adds client support for GLM-5.4. Availability depends on your connection. Verified local subscription models, including Codex models, stay visible during temporary outages or failed refreshes, with clearer messages for exhausted quotas, unavailable accounts and temporary Gemini rate limits. We also updated support for newer Copilot models, Gemini model listings and prices, OpenCode Zen image inputs, and xAI fallback when a balance runs out.

### Updates for three engine plugins

Antigravity Engine 0.4.3 adds Chinese and English descriptions for three Orchestrator models, explaining how planning and execution work together. It also lets you choose a custom engine path, and fixes issues with sending several large images and losing final updates as the engine exits. DeepSeek Engine 0.2.1 and ZCode Engine 0.2.2 support question cards with this Mira release, and ZCode also supports workspaces on your other computers.

### Optional Herdr and AgentCompass plugins

Herdr 0.1.115 lets you inspect local terminal workspaces and bring status changes into Mira notifications and automations. AgentCompass 0.6.1 routes work and collects results. Its work-starting action runs child sessions with the highest permission level. Both plugins are optional installs.

### Queued messages are visible again on desktop

This fixes an issue introduced in 0.1.30 where queued messages were hidden. The desktop also shows paused and stopping states again. On mobile, you can select and copy queued text while a question is open, and Mira now reflects background work that a plugin engine continues after answering.

### A clearer inbox and easier session navigation

Buddy chats and pinned sessions appear in the relevant inbox sections, and marking a session done immediately selects the next one. Desktop and mobile remember separate display preferences for the inbox and regular list, pending unread items are indicated, and mobile swipe actions are easier to recognize. Question navigation now follows your reading position, alongside fixes for mobile session links, scrolling after returning to a session and offline device indicators.

### Browse and preview files in the sidebar

Browse folders, see thumbnails and open a preview directly in the desktop sidebar. On Windows, the file preview helper now carries the Mira name, and fixes address document attachment paths and an unexpected console window. This update also improves remote project browsing, HTML file links and the handling of missing preview resources.

### Reading, attachments and dictation

Generated images load thumbnails automatically, long inline code wraps, and content resizes with the right sidebar. Conversation history retains images and attachments when switching computers or models, and Mira prepares that history more reliably for models with less room. On macOS, dictation preserves input method state and formats numbered lists more clearly. The Chinese enumeration comma can also open the skills menu.

### Buddy collaboration and scheduled work

Renaming a buddy updates its main chat title, new work it starts can report back automatically, and new scheduled automations default to returning results to the current chat. Buddies can snooze and bring back sessions, and memory search finds more relevant results for multi-word queries, and less active buddies still organize their memories regularly. Mira also explains missed one-time runs and how to retry, and checks state more reliably when completing work remotely or reconnecting.

### Plugins, email and messaging channels

Manage plugin model providers in settings and check or update plugins from GitHub Releases in the updates list. Mira asks before a plugin adds a connection host. Interactive cards can add resources to the composer by click or drag, email reply cards better show and check the quoted original, and PR cards can select a follow-up model again. We also improved iMessage replies, mentions, document delivery and permission messages, Slack tool calls, and source and audio notices in connected channels.

### A new mobile build for steadier connections and Android text selection

Mobile connects and reconnects to your computer faster, holds the connection more reliably when networks change, and keeps interactive controls responsive during large transfers. Android fixes interrupted text selection in chat tables, and iOS updates Live Activities with the full session status when the app returns to the foreground. Install the new iOS or Android app build to get these changes.

### Remote desktop controls and connection recovery

Foldable devices get an ice-blue retro keyboard and trackpad, and tapping a text field on a controlled Mac now brings up the phone keyboard more reliably. Remote connections can fall back when a relay path fails. Mira also rechecks the active device and model after a computer switch, and the desktop connection panel compares traffic across connection types. macOS offers clearer guidance for local network and privacy screen permissions.

### More accurate usage and better runtime recovery

Generation speed is more consistent on desktop and mobile, session cost stays stable as you scroll, and mobile retains the last usage readings while reconnecting. Usage costs can retain the provider’s original currency. Claude Code shows retry progress when its service is temporarily unavailable. This release also fixes a case where older Codex sessions could not resume and improves reconnection and errors for Pi and remote runs.

### Desktop startup, sign-in and everyday fixes

The desktop window can open sooner. Windows fixes periodic stalls around update prompts and stray background command windows, and aligns quota columns in the tray. Expired sign-in prompts stay on top, recoverable sign-ins are preserved for the same account, and media playback resources are released when you leave a page. This update also includes fixes for windows, folder picking, the macOS Dynamic Island, collaboration and project working directories.

## 下载说明

Windows 安装包为未签名内测版。iOS 0.1.31 可通过 [TestFlight](https://testflight.apple.com/join/bPcJSNqr) 安装。

## Download notes

The Windows installer is an unsigned test build. Install Mira 0.1.31 for iOS through [TestFlight](https://testflight.apple.com/join/bPcJSNqr).
