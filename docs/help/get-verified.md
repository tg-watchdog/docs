
# 加入群组并完成验证
::: tip 步骤及细节可能略有差异
在本篇中，我们将会在 iPhone 版 Telegram app 以英文环境解释如何加入启用 Telegram Watchdog 的群组。

根据您的设备、操作系统和语言设定的不同，完成来自 Telegram Watchdog 的 CAPTCHA 验证的步骤可能有所不同，不过，基本步骤类似。您可以根据实际情况调整您的操作。
:::

要加入启用了 Telegram Watchdog 验证的群组很简单，您不需要完成复杂的 CAPTCHA 难题，只需要点击两下就能完成验证、加入群组。

首先，根据您加入群组的类型不同，您可能会看到以下两种提示：

- **如果您希望加入私有群组**：您会看到一张群组名片，并提示您需要经过管理员同意才能加入群组。
- **如果您希望加入公开群组**：您可以看到群组聊天记录，底部的加入按钮为「Apply to Join Group」。

![在私有群组中和公开群组中的加入群聊前审核的提示。][image-1]

点击「Request to Join Group」或「Apply to Join Group」按钮后，您会收到 Telegram Watchdog 发来的验证消息。

![收到的验证消息，以及 CAPTCHA 页面。][image-2]

点击消息下方的「Start」按钮，Telegram 会弹出 Telegram Watchdog 的 web app。

::: tip 为何会提示我 Telegram Watchdog 会收集 IP 地址？
这是 Telegram 的统一提示。

由于 Telegram 的 web app 本身依赖网页相关的技术栈，因此 web app 与用浏览器访问普通网站一样，发往 Telegram Watchdog 的请求封包中会有您的 IP 地址，确保能将请求响应发送给您。

请放心，Telegram Watchdog 本身不设有数据库，不会收集您和您加入群组的任何数据。
:::

完成 web app 中的 CAPTCHA 验证后，Telegram Watchdog 就会处理您的加入请求。之后，您可以在

::: tip 请在 180 秒内完成验证！
每个入群请求有 180 秒有效期。如果过期后再完成 CAPTCHA 验证，您会收到「请求已过期」的提示，并且您的验证消息和入群请求也会被一并删除。
:::

[image-1]:	./images/group-approval-settings.png
[image-2]:	./images/verify-message-and-chaptcha.png