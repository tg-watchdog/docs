# 在私有群中使用
::: tip 步骤及细节可能略有差异
在本篇中，我们将会在 iPhone 版 Telegram app 以英文环境解释如何启用 Telegram Watchdog。

根据您的设备、操作系统和语言设定的不同，启用 Telegram Watchdog 的步骤可能会有所差异，不过，基本步骤类似。您可以根据实际情况调整您的操作。
:::
## 第一步：将机器人设为管理员
在 Telegram 中搜索「WatchdogVerifyBot」，找到 Telegram Watchdog 帐户。进入后，点击下方「Start」按钮，机器人将会回复一条消息。点击消息下方的「Set me as group admin」按钮。

![搜索 Telegram Watchdog，并点击「Start」。][image-1]

::: tip 快速设置管理员
您也可以点击 [此链接][1] 快速拉起 Telegram app，然后继续此教程（两个操作等价）。
:::

之后，Telegram 会弹出一个聊天选择器。找到你想启用 Telegram Watchdog 机器人的私有群组聊天。

选择后，Telegram 会询问你是否将 Telegram Watchdog 设为所选群组的管理员，并确定需要的权限。请确保开启「Invite Users via Link」。

确认后，点击「Add Bot as Admin」按钮以完成此步骤设置。

![将 Bot 设为管理员。][image-2]

## 第二步：设置邀请链接
在刚才选择的私有群组中，点击右上角群组头像进入群组资料卡。再点击右上角的「Edit」按钮进入群组设置。

在设置中点击「Invite Links」进入群组链接管理页面。

![进入群组链接管理页面。][image-3]

点击管理页面下方的「Create a New Link」按钮，进入创建新邀请链接页面。在此页面中将「Request Admin Approval」开关打开。确保设置无误后，点击右上角的「Create」按钮，以当前配置创建邀请链接。

![邀请链接设置页面，以及链接分享页面。][image-4]

创建后，你可以在邀请链接列表页面找到刚才新建的邀请链接。点击此链接，再点击链接右侧的「更多」按钮（省略号），可以复制或分享此链接。

::: tip 不要分享默认的邀请链接
Telegram 的私有群组默认会有一个邀请链接，这个链接在邀请链接列表中顶部。该链接的邀请属性无法被修改，这意味着 Telegram Watchdog 无法审核通过此链接进入群组的新成员。

如果这个链接之前被分享过，您可以点击此链接的右侧「更多」按钮（省略号），并点击「Revoke」，以确保之前分享的链接失效。

![撤销默认的邀请链接。][image-5]
:::

大功告成！现在，您只需要分享 *正确的* 邀请链接，之后，通过这个邀请链接进入群组的新成员们都需要通过 Telegram Watchdog 验证方能加入群组。

[1]:	https://t.me/WatchdogVerifyBot?startgroup=start&admin=can_invite_users

[image-1]:	./images/search-bot-and-set-as-admin.png
[image-2]:	./images/set-admin-permission.png
[image-3]:	./images/manage-private-group-links.png
[image-4]:	./images/create-and-share-invite-links.png
[image-5]:	./images/revoke-default-invite-link.jpeg