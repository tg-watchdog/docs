# 常见问题

## 为什么我开启新成员审核功能后没有生效？
这是旧的 iOS 版 Telegram 的一个 bug。在开启开关并点击完成按钮保存后，再返回相应页面，相关设置会被重置。

请放心，点击完成按钮后，设置即被保存。如果您不小心重新进入该页面，建议您重新手动将开关打开并保存，保证设置持续生效。

当然，最佳做法是升级您的 Telegram 客户端。在新版中只有「Approve New Members」的开关，开启后保存即可启用新成员审核功能。

## 我的群组与某个频道关联，作为这个频道的评论群组存在。使用 Telegram Watchdog 机器人会有影响吗？
由于 Telegram Watchdog 机器人需要群组开启「只有成员才能发送消息」选项方能生效，因此 Telegram 会禁止非群组成员在关联频道发表评论。

如果您的群组有对应需求，建议您使用其他工具来审核新成员。

## 有人反馈说无法加入群组（加入报错），是怎么回事？
公开群组成员审核功能对 Telegram 版本有要求，因此较低版本的 Telegram 客户端将无法加入使用 Telegram Watchdog 机器人的群组。您可以：

- 建议对方对 Telegram 客户端进行更新
- 尝试使用其他操作系统上更新版本的 Telegram
- 手动邀请对方加入群聊（需要有邀请权限，不一定是管理员）

## 为何会提示我 Telegram Watchdog 会收集 IP 地址？

这是 Telegram 的统一提示。

由于 Telegram 的 web app 本身依赖网页相关的技术栈，因此 web app 与用浏览器访问普通网站一样，发往 Telegram Watchdog 的请求封包中会有您的 IP 地址，确保能将响应发送给您。

请放心，Telegram Watchdog 本身不设有数据库，不会收集您和您加入群组的任何数据。您可以前往 Telegram Watchdog 的 [源码库][1] 中对代码进行审计。

## 我可以自己部署一个 Telegram Watchdog 吗？
当然可以！不过目前还没有很详细的部署指南（很快有了，咕咕咕！）。

如果您感兴趣，目前可以访问 [手边书][2] 部分来了解 Telegram Watchdog 的部分技术细节。

## 我可以使用其他人部署的 Telegram Watchdog 吗？
只要机器人所有者允许您将他们部署的机器人加入群组中就可以使用。

不过，Telegram Watchdog 项目不会对其他人部署的 Telegram Watchdog 实例负责：他们有可能会在自己部署的实例中对 Telegram Watchdog 的代码进行修改。有些修改是很好的——他们为 Telegram Watchdog 添加许多新功能；但也有可能会有一些人会将 Telegram Watchdog 的代码用于恶意的数据收集等用途。

请在使用第三方部署的 Telegram Watchdog 实例之前，确保您完全信任这个第三方，否则可能会对您的群组聊天造成隐私风险！

[1]:	https://github.com/Astrian/tg-watchdog
[2]:	/handbook/