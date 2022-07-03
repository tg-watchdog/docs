# 在公开群组中使用
::: tip 步骤及细节可能略有差异
在本篇中，我们将会在 iPhone 版 Telegram app 以英文环境解释如何启用 Telegram Watchdog。

根据您的设备、操作系统和语言设定的不同，启用 Telegram Watchdog 的步骤可能会有所差异，不过，基本步骤类似。您可以根据实际情况调整您的操作。
:::
## 将机器人设为管理员
在 Telegram 中搜索「WatchdogVerifyBot」，找到 Telegram Watchdog 帐户。进入后，点击下方「Start」按钮，机器人将会回复一条消息。点击消息下方的「Set me as group admin」按钮。

![搜索 Telegram Watchdog，并点击「Start」。][image-1]

::: tip 快速设置管理员
您也可以点击 [此链接][1] 快速拉起 Telegram app，然后继续此教程（两个操作等价）。
:::

之后，Telegram 会弹出一个聊天选择器。找到你想启用 Telegram Watchdog 机器人的私有群组聊天。

选择后，Telegram 会询问你是否将 Telegram Watchdog 设为所选群组的管理员，并确定需要的权限。请确保开启「Invite Users via Link」。

确认后，点击「Add Bot as Admin」按钮以完成此步骤设置。

![将 Bot 设为管理员。][image-2]

::: tip 需要管理员权限
进行以上操作，需要您是对应群组的拥有者（群主），或您拥有该群组的「Invite Users via Link」与「Add New Admins」管理员权限。
:::

## 开启加入审核
在刚才选择的私有群组中，点击右上角群组头像进入群组资料卡。再点击右上角的「Edit」按钮进入群组设置。

在设置中点击「Group Type」进入群组类型管理页面。

![公开群组的群组设置页面，以及启用加入审核的页面。][image-3]

在群组类型管理页面中，打开「Approve New Members」开关，然后点击右上角的「Done」按钮，即可开启群组加入审核功能，并在有新成员加入的时候激活 Telegram Watchdog。

::: tip 我看不到对应开关，是怎么回事？
如果您的 Telegram 客户端版本略低，您可能看不到以上开关，但可以看到「Who can send messages」的选项。将此选项设为「Only members」之后，上面这个设置就会出现。直接将其启用即可。

如果您同时无法看到以上两个开关，那么您需要考虑升级您的 Telegram 客户端。
:::

[1]:	https://t.me/WatchdogVerifyBot?startgroup=start&admin=can_invite_users

[image-1]:	./images/search-bot-and-set-as-admin.png
[image-2]:	./images/set-admin-permission.png
[image-3]:	./images/turn-approval-on-in-public-groups.png