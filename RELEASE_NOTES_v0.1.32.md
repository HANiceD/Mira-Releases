# Mira v0.1.32

![冬日午后，Mira 在成都居民楼晒台上叠一条灰蓝色围巾](https://raw.githubusercontent.com/HANiceD/Mira-Releases/main/notices/assets/v0.1.32-4x1.webp)

DeepSeek 和 ZCode 插件引擎支持在一台电脑上使用多个账号。模型组、个人聊天渠道和定时任务有了更细的设置，任务在同账号的电脑与手机之间也更容易接续。请安装新版手机应用，以获得 iOS 锁屏实时活动和两端小组件的原生更新。

DeepSeek and ZCode now support multiple accounts on one computer. Model groups, personal messaging channels, and scheduled tasks offer more control, and it is easier to resume work across devices signed in to the same account. Install the new mobile app to get the native Lock Screen Live Activity changes on iOS and widget updates on both platforms.

## 插件引擎与账号 / Plugin engines and accounts

- **DeepSeek 和 ZCode 多账号。** 在各自插件的账号设置里，可以添加多个自己的账号，分别查看余额或额度。当前账号额度用完时，可切到另一个可用账号。账号信息暂时读不到时，Mira 会说明原因。
- **Antigravity 的模型选项。** Antigravity 插件显示现有 Google 登录和可用模型。可以在供应商详情调整该引擎支持的模型选项。
- **伙伴提问卡。** Antigravity 伙伴需要你确认方向或补充信息时，可以在 Mira 中打开提问卡，收到你的选择或文字回复后继续。
- **伙伴与群任务能沿用选定引擎。** 伙伴更换自己的模型时可以选择可用的插件引擎。群里点名使用插件引擎的伙伴后，任务能沿用发起人选择的本机引擎，并修复此前有时发不出回复的问题。
- **引擎更容易说明哪里卡住。** 任务页会说明并发名额是否已满、何时可重试。找不到所需工具时，有恢复提示。修复了部分插件引擎的项目任务重开后发不出第一条消息的问题。
- **订阅换号后保留原消息。** ChatGPT 订阅用完时先尝试同一连接下有额度的账号，再使用可用的付费额度。订阅账号交接成功后，继续发送队首等待的那条消息。

- **Multiple accounts in DeepSeek and ZCode.** Add several of your own accounts in the plugin's account settings and check each one's balance or quota. The engine can switch to another available account when the current one runs out. Mira explains when it cannot read the account details.
- **Antigravity model options.** The Antigravity plugin shows your existing Google sign-in and available models. Adjust supported model options in the provider details.
- **Question cards from buddies.** An Antigravity buddy can open a question card in Mira when it needs a decision or more information. Choose an answer or type a reply and the buddy can continue.
- **Buddies and group tasks keep the chosen engine.** A buddy can pick an available plugin engine when changing its model. Mentioning a buddy in a group uses the local engine chosen by the person who started the task. This also fixes cases where the buddy could not reply.
- **Clearer messages when an engine gets stuck.** A task shows when its engine is at capacity and when you can retry. Tool searches that find no match offer a recovery hint. Reopening certain project tasks now lets you send the first message again.
- **Queued messages survive account handoffs.** When a ChatGPT subscription runs out, Mira tries an available account on the same connection before using available paid credits. Once the handoff succeeds, Mira sends the original message at the front of the queue.

## 额度、用量与价格 / Quota, usage, and pricing

- **更多地方能看到 Antigravity 额度。** Mac 菜单栏、手机小组件和模型选择器显示插件为当前 Google 登录上报的额度与时间窗口。Mac 菜单栏也补上了智谱 GLM Coding Plan 的余量。
- **插件任务进入今日统计。** Mac 菜单栏的未读、运行中、今日用量和每日 token 统计均计入插件引擎任务。任务消耗和订阅剩余额度分别显示。
- **同账号电脑的用量更完整。** 控制另一台登录同账号的电脑时，可以看到它的插件供应商用量和各订阅账号的额度。SSH 上的 Codex 任务没有额度或金额可显示时，底栏仍会显示本任务的 token 数。
- **模型详情的参考价格更清楚。** 同一个模型有多个连接时，详情和用量估算优先采用该供应商提供的价格，并保留渠道原币参考价。实际扣费以所用服务为准。
- **Claude 额外用量和移动端图标。** 菜单栏能保留未提供重置时间的 Claude 额外用量读数。iOS 和 Android 用量小组件及手机用量页显示 Kimi 的订阅图标。

- **Antigravity quota in more places.** The Mac menu bar, mobile widgets, and model picker show the quota and time window reported by the plugin for the current Google sign-in. The Mac menu bar also shows remaining GLM Coding Plan quota.
- **Plugin-engine tasks count toward today's totals.** The Mac menu bar includes these tasks in unread, running, and daily usage totals, including daily token usage. Usage and remaining subscription quota are shown separately.
- **More usage details for your other computers.** When controlling a computer on the same account, you can see its plugin-provider usage and quota by subscription account. SSH-based Codex tasks show their token count when no quota or cost is available for the footer.
- **Clearer reference prices.** When a model is available through several connections, Mira uses the provider's price first in model details and usage estimates and shows the original currency where available. Actual charges follow the service you use.
- **Claude extra usage and mobile icons.** The menu bar keeps Claude extra-usage readings even when no reset time is available. The iOS and Android usage widgets and the mobile usage screen show the Kimi subscription icon.

## 模型、模型组与供应商 / Models, model groups, and providers

- **ChatGPT 订阅可以重新出图。** 已连接且支持出图的 ChatGPT 订阅可再次用于生图，并优先选择仍有额度的合适账号。
- **模型组有三种新选法。** 可设为用完再换、余量最多的先用或按权重分配，也可按星期和时段设例外。支持分别为各模式决定遇到来源故障时是否自动换用组内下一个来源。
- **模型供应商设置补齐常用入口。** 「添加供应商」可看到 Mira 官方模型插件及 Token Rhythm 第三方连接预设。已安装的插件供应商可从其菜单卸载。同账号远程插件引擎也会列在供应商设置中。
- **模型目录补充能力与说明。** 智谱 Coding Plan 的连接预设可选 GLM-5.4。DeepSeek V4.1 Flash 的图片输入会被正确识别。受支持的 OpenAI API 连接可为 GPT-6.2 Sol 选用 Fast。目录刷新一时未返回的模型会标明状态。
- **辅助模型设置可在保存时发现问题。** 自选的辅助模型全部不可用时，界面会说明情况并给出调整入口。指定本机供应商连接新建任务时，会沿用这次的明确选择。
- **同账号电脑上的模型更容易辨认。** 供应商组详情逐台显示电脑回应的状态。新增模型暂未开放远程调用时，设置中会说明限制。远端切换模型受阻时，也会显示具体原因。

- **Image generation works again with ChatGPT subscriptions.** Connected ChatGPT subscriptions that support image generation can be used again. Mira gives priority to eligible accounts with quota remaining.
- **Three new ways to choose within a model group.** Use a source until its quota runs out, prefer the source with the most remaining quota, or distribute tasks by weight. Set exceptions by day and time, and choose for each mode whether a failed source should fall through to the next one in the group.
- **More actions in provider settings.** Add Provider lists official Mira model plugins and a third-party Token Rhythm connection preset. Use an installed plugin provider's menu to uninstall it. Remote plugin engines on your account are also listed in provider settings.
- **More model capabilities and clearer availability.** The Zhipu Coding Plan preset offers GLM-5.4. DeepSeek V4.1 Flash is recognized as accepting images. Supported OpenAI API connections can use GPT-6.2 Sol with Fast. Models missing from the latest refresh are marked in the catalog.
- **Check auxiliary models when saving settings.** If all your custom auxiliary models are unavailable, Mira explains the issue and offers a way to adjust them. A new local task uses the provider connection you explicitly chose for it.
- **Clearer status for models on your other computers.** A provider group shows each computer's status as it responds. Settings explain when a newly added model is unavailable for remote use, and switching errors show a specific reason.

## 伙伴与个人聊天渠道 / Buddies and personal messaging channels

- **个人飞书渠道可按群配置。** 每个群可以选自己的项目、模型与访问范围。需要完全访问时，在该群的渠道设置中显式开启。
- **iMessage 的回复和附件更完整。** 渠道任务的定时结果及在当前回复中补充消息所产生的结果可发回原聊天。附件尽量交给模型原件，大文件可按编号取用，误标为 JPEG 的 HEIC 图片也能进入读图。可为指定聊天开启忙碌时补充当前回复。
- **个人 Discord 和微信回复更稳。** 个人 Discord 的回复中有空白分段时，后续正文也会完整送达。个人微信会显示发送失败的具体原因，并在插件引擎拒绝消息后及时结束「正在输入」。
- **伙伴列表和项目有更多反馈。** 从侧栏可直接打开伙伴主任务。伙伴发出的任务链接旁会更新任务状态。短时唤醒时先显示「连接中」，主力电脑确认在线后会及时刷新状态。多个个人渠道可并行连接。
- **伙伴对话更容易追踪。** 私聊的来源卡的对齐和引用显示更清楚，已核实的转交先显示发送方，回复时间放到同一段处理记录前。群聊中的伙伴可以交付可播放的 MP4 附件。
- **实时语音可选自己的连接。** 伙伴通话可使用你在实时语音设置中明确选择的 OpenAI 或阿里云百炼连接，按该连接的配置使用。

- **Settings per group in personal Feishu channels.** Choose a project, model, and access level for each group. To grant Full Access, turn it on explicitly in that group's channel settings.
- **More complete iMessage replies and attachments.** Scheduled results from a channel task and results from a message added to an active reply can go back to the original chat. Models receive original attachments where possible. Large files can be retrieved by number, and HEIC images mislabeled as JPEG can be read. Enable messages during an active reply for individual chats.
- **More reliable replies in personal Discord and WeChat.** Personal Discord delivers the rest of a reply after a blank section. Personal WeChat reports why a send failed and clears the typing indicator when a plugin engine rejects a message.
- **Open and track buddy tasks more quickly.** Open a buddy's main task directly from the sidebar, and see a live status beside links to tasks the buddy creates. A waking device shows Connecting until its main computer responds. Personal channels can connect in parallel.
- **Clearer context in buddy conversations.** Source cards in private chats align and display quotes correctly. Verified handoffs identify the sender first, and reply timestamps appear before their activity details. Buddies in group chats can send playable MP4 attachments.
- **Choose your connection for realtime calls.** A buddy can use the OpenAI or Alibaba Cloud Model Studio connection you explicitly select in realtime voice settings.

## 同账号设备与远程连接 / Devices and remote connections on the same account

- **被移除的设备可以在本机重新加入。** 在电脑或手机上仍有效登录时，点「重新加入」即可恢复该设备自己的连接。两台电脑检测到共用了设备身份时，Mira 会提示你为其中一台更换身份。
- **连接状态更容易判断。** 设备之间会根据可用性选择直连或中继，界面显示相应延迟。发现中继单向故障时会避开该路径。多台设备同时断开后的任务读取和重连也更可靠。
- **远程任务列表与操作更清楚。** 即使另一台电脑没有任务，离线时也会显示状态。通过同账号远控可读回任务运行状态并归档。桌面会核对任务所在设备后再打开它。
- **远程消息会保留在队列。** 账号检查超时，或者任务正在准备快照时，待发消息会保留。再次打开任务时仍可看到发送受阻的原因，以及手动重发的方式。
- **在同账号电脑上恢复任务的 worktree。** 当缺少原工作目录时，可以在支持恢复的桌面端主动选择恢复，使用有权限的电脑和原先保存的任务快照。
- **SSH 设置和远控错误更明确。** 同名受管配置与外部配置冲突时会提示。带尾注释的工作目录命令可正确处理。Windows 远控输入组件启动失败时能给出更准确的错误。

- **Rejoin from a removed device.** If you are still signed in on the computer or phone, choose Rejoin there to restore that device's own connection. If two computers use the same device identity, Mira prompts you to change it on one of them.
- **See how your devices are connected.** Mira can choose a direct or relayed connection and show its latency. It avoids a relay with one-way failures and recovers task access more reliably after several devices disconnect at once.
- **Clearer remote task lists and controls.** An offline computer shows its status even when its task list is empty. On a computer signed in to the same account, you can check whether a task is still running and archive it remotely. Mira checks where a task lives before opening it.
- **Queued remote messages are kept.** A slow account check or snapshot preparation keeps your pending message in the queue. When you reopen the task, you can see what blocked the send and how to retry manually.
- **Restore a task's worktree from an authorized computer.** If the original working directory is missing, choose Restore on a supported desktop. Mira uses your saved task snapshot and a computer you have permission to use.
- **Clearer SSH and remote-control errors.** Mira identifies conflicts between managed and external SSH aliases and handles working-directory commands with trailing comments. Windows also reports more specific errors if the remote-control input helper fails to start.

## 定时任务、协作与任务管理 / Scheduling, collaboration, and task management

- **定时任务和自动化可选模型组。** 创建或编辑时可以保存模型组，任务按所选模式运行。定时执行遇到额度用尽时，可优先在符合条件的同账号组内换号，并接续原任务。
- **伙伴的例行任务跟随当前模型。** 默认定时任务使用伙伴当前选择的模型。旧例行任务留下的空条目只在确认从未发出时清理。关联引擎拒绝执行时会提示恢复方法。
- **用自动化跟进 GitLab 合并请求。** 填入合并请求地址，选用已有的 GitLab 连接，再设定检查频率和要关注的变化。状态、评论、跟进和归档沿用熟悉的卡片流程。
- **协同任务的主控和成员可用模型组。** 创建协同时可为两者选模型组。派工明确报错后，可从提示条手动继续。从 Git 主分支派出的成员会使用刚取回的最新内容。
- **请 Mira 批量置顶任务。** 你可以让 Mira 对自己有权操作的任务批量置顶或取消置顶。它会逐项返回结果，某一项失败时仍能看出已完成哪些。
- **让 Mira 将导出保存到固定目录。** 在设置中主动选定目录后，经授权的导出可保存到该位置，适合把多次任务产出整理到同一处。

- **Use model groups in scheduled tasks and automations.** Choose a model group when creating or editing a schedule and the task follows its mode. If an eligible scheduled run hits a quota limit, it can switch accounts within the group and resume the task.
- **Buddy routines follow their current models.** Default schedules use the buddy's current model. Empty entries left by old routines are cleared once Mira confirms they were never dispatched. If the linked engine declines the run, Mira explains how to recover.
- **Follow GitLab merge requests with automations.** Paste a merge request URL and choose an existing GitLab connection, a check frequency, and the changes to watch. Status, comments, follow-up, and archiving use the familiar card flow.
- **Model groups for collaboration leads and workers.** Both roles can use a model group. If a worker reports an explicit failure, you can resume it from the banner. Workers started from the main Git branch use the latest fetched revision.
- **Ask Mira to pin or unpin several tasks.** Mira can pin or unpin the tasks you are allowed to manage and show the result for each task, including when only some operations succeed.
- **Save exports to a folder you select.** Choose a destination in Settings to let Mira save authorized exports there and keep outputs from multiple tasks together.

## 插件市场、表单与文件打开 / Plugin market, forms, and file opening

- **市场分类、来源和更新状态更清楚。** 浏览插件时能看到更明确的分类与安装来源。插件图标加载更稳，返回设置页后仍可看到进行中的更新。从公开 GitHub Release 安装或更新插件时，可以匿名读取发布包。
- **在 Mira 中填写插件表单。** 获准的插件可以请求显示表单，由 Mira 绘制并在你提交后把结果交回插件。密码和令牌等敏感信息继续使用专门的安全交接入口。
- **主动用插件打开指定文件。** 当你为某个文件选择支持该类型且已获批准的插件时，Mira 交给插件这一个文件。插件卡片也可挂接指定工具，重复打开同一预览时复用原页签。
- **插件可为你打开有权查看的任务。** 在独立批准后，插件可以在你选定的同账号电脑上打开一个你有权看到的任务。另一项独立批准可让插件读取自己当次运行中原本已显示的进度。
- **从同账号的电脑提交插件审核。** 插件作者可以选择有权使用的同账号电脑，通过现有审核流程送审。授权、可见范围和审核决定仍由原有入口管理。
- **两项官方插件修复。** 设备模拟器改进 Windows 上已连接 Android 模拟器的识别。163 邮箱按关键词搜索没有结果时，会复查限定范围内的邮件，补回可能漏掉的匹配。

- **Clearer categories, sources, and update status.** The plugin market labels categories and install sources more clearly, loads icons more reliably, and keeps update progress visible when you reopen settings. Plugin packages hosted in a public GitHub Release can be fetched anonymously for install or update.
- **Fill out plugin forms in Mira.** An approved plugin can request a form that Mira displays and returns after you submit it. Passwords and tokens continue to use the dedicated secure input flow.
- **Open a selected file with a plugin.** When you choose an approved plugin that supports the file type, Mira gives it that one file. Plugin cards can link to a specific tool, and opening the same preview again reuses its tab.
- **Plugins can open tasks you can see.** With separate approval, a plugin can open a visible task on the same-account computer you select. Another separate approval lets a plugin read progress already displayed for its own current run.
- **Submit plugin reviews from your other computers.** Plugin authors can choose an authorized computer on the same account to submit through the existing review flow. The existing authorization, visibility, and review rules apply.
- **Two official plugin fixes.** Device Simulator detects connected Android emulators more accurately on Windows. When a keyword search returns nothing, 163 Mail checks a limited set of messages again to catch missed matches.

## 桌面操作与系统权限 / Desktop controls and system permissions

- **Windows 托盘和截图。** 设置中新增「托盘悬浮卡片」开关。修复区域截图预览突然变灰、HDR 屏幕截图偏亮的问题。用「打开方式」启动文件时会保留原先配置的选项。
- **对话阅读和导航。** 桌面可为对话选择更宽的版面。项目选择器支持方向键和回车。返回设置时保留原来位置，按 Esc 可逐层返回。
- **听写与无障碍。** 听写期间隐藏重复的原生文字光标。首页币种选择器和已有项目的文件夹选择项有了明确的读屏名称。
- **文件预览和辅助工具有恢复入口。** 本地 Markdown 图片加载失败时可交给默认应用打开。Mira Chrome 的标签列表读取超时时，界面会说明如何恢复。Codex 的浏览器开关也会说明它何时适用于本机任务。
- **macOS 电脑操作权限更细。** 系统允许只控制指定应用时，Mira 按实际授权范围操作。权限引导点击位置更准确，锁屏时发起代输入也会立刻说明需要先解锁。
- **手动上传日志可单次确认。** 在「关于」页主动上传时，如此前未开启授权，Mira 会弹出系统确认。此次同意只用于这一次上传。取消后按钮可以继续使用。

- **Windows tray and screenshots.** Settings has a switch for tray hover cards. Region capture previews stay clear, and HDR screenshots no longer come out over-bright. Open With keeps the options registered for the chosen app.
- **More room for conversations and easier navigation.** Choose a wider conversation layout on desktop. Use the arrow keys and Enter in the project picker. Settings remembers where you were, and Esc takes you back one level at a time.
- **Dictation and accessibility.** Dictation hides the duplicate native text cursor. The home currency picker and the existing project folder picker have clearer screen reader labels.
- **Recovery options for previews and browser tools.** Open a local Markdown image in the default app when its preview cannot load. Mira Chrome explains what to do when reading the tab list times out. The Codex Browser switch explains when it applies to local tasks.
- **Work with macOS permissions for selected apps.** When the system grants control of specific apps, Mira respects that scope. The permission guide responds to clicks more accurately, and requesting input handoff on a locked computer immediately tells you to unlock it.
- **Approve a manual log upload once.** If you start an upload from About without prior consent, Mira opens a system confirmation for that upload. The button remains available if you cancel.

## 手机任务、图片与小组件 / Mobile tasks, images, and widgets

- **更新手机安装包以获得原生改动。** iOS 锁屏实时活动在真正结束前保留最近的任务状态和入口。iOS 与 Android 的原生用量小组件同步更新图标。
- **短暂切出后更容易接着用。** iOS 短暂切到后台时保留已有局域网直连。手机对话中的交互卡片也能在短暂失去焦点后继续显示。
- **Android 图片预览可保存原图。** 修复打开图片预览菜单可能闪退的问题，并加入保存原始图片的操作。
- **大屏竖屏与冷启动。** 大屏手机竖屏时，任务页用一个悬浮按钮打开列表。修复冷启动后任务列表顶部多出一行空白。
- **移动端状态和名称更清楚。** 模型选择器显示模型名称。设备中继连接出错时及时给出提示，Android 遇到服务域名解析失败时显示本地化说明。

- **Install the new mobile app for native changes.** iOS Lock Screen Live Activities keep the last task state and entry point until the activity ends. Native usage widgets on iOS and Android have updated icons.
- **Resume more easily after briefly switching away.** iOS keeps an existing LAN connection during brief background interruptions. Interactive cards in mobile conversations also remain available after a short loss of focus.
- **Save original images on Android.** The image preview menu no longer crashes in affected cases and offers an option to save the original image.
- **Portrait task view and cold starts.** On larger phones in portrait, use one floating button to open the task list. The extra blank row at the top after a cold start has been removed.
- **Clearer names and errors on mobile.** The model picker displays the model name. Relay connection errors appear promptly, and Android displays a localized message if it cannot resolve the service domain.

## 稳定性、恢复与兼容 / Reliability, recovery, and compatibility

- **任务能从暂时失败中恢复。** 伙伴能力目录刷新后会继续处理排队消息。Pi 回复传输中断时会显示重试进度，正常退出及已回复后的收尾也会显示正确状态。
- **运行暂停和权限提示更准确。** 确认超时与主动拒绝分别说明。任务仍在运行而暂时无法删消息，或执行前检查拦住任务时，界面会告诉你原因。
- **旧任务和旧连接更好接续。** 旧订阅登录暂停后，已有任务仍能识别当前可用连接。移除 Claude 默认账号后，任务可以用符合条件的连接完成换机。自定义 Claude API 地址末尾已有 /v1 时可正常转发。
- **对话中的长内容和插件卡片更稳定。** 插件卡片加载、换页更少闪白，远程卡片支持离线回看。修复某些历史插件卡片循环加载、Mermaid 节点标签箭头显示异常的问题。
- **伙伴资料和启动更可靠。** 伙伴能力目录暂时不可用时仍可进入任务。群历史导入失败会有限次重试，恢复后继续。记忆自动整理按上次整理以来的消息量判断，搜索同时保留整词和部分文字匹配。
- **更新和运行状态更连贯。** Windows 插件更新后浏览器连接恢复更稳。旧任务重开会保留未发消息或拒绝提示，正在执行的目标任务也能在普通消息处理完成后继续。

- **Tasks can recover from temporary failures.** Queued messages resume after a buddy's capabilities refresh. Pi shows retry progress when delivery is interrupted and reports the right state after normal exit or after a reply has already been delivered.
- **More precise messages about pauses and permissions.** Mira distinguishes a timed-out confirmation from a denial. It explains when a running task prevents deleting a message or when a pre-run check stops execution.
- **Better continuity for older tasks and connections.** Existing tasks recognize a usable connection after an old subscription sign-in is paused. Claude tasks can move to another computer using an eligible connection after the default account is removed. Custom Claude API addresses that already end in /v1 now route correctly.
- **More dependable conversation content and plugin cards.** Plugin cards are less likely to flash during loading or tab switches, and remote cards can be viewed offline. Some older cards no longer loop during previews, and arrows in Mermaid node labels display correctly.
- **Better buddy startup and memory search.** A buddy task still opens when its capability catalog is temporarily unavailable. A failed group history import retries a limited number of times and can continue after recovery. Automatic memory maintenance counts messages since the last pass, and search keeps both exact and partial matches.
- **Smoother updates and task recovery.** Browser connections recover more reliably after Windows plugin updates. Reopened tasks keep queued messages or their rejection notice, and goal-driven tasks can continue after an ordinary message has been processed.
