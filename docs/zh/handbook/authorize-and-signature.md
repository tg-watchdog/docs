# 请求签名与信息验证
在版本 2206.02 之前，Telegram Watchdog 发往用户的 Web app 验证按钮中仅携带用户希望加入的群组的 ID 参数，不包含申请时间、验证消息 ID 等参数。加上 Telegram Watchdog 本身没有数据库来存储用户数据，这就导致 Telegram Watchdog 不能判断用户通过人机验证的时间是否距离申请时间太长，以及在申请通过之后不会删除/修改对应验证消息。

在 [2206.02](/changelogs/2206.02.html) 版本之后，Telegram Watchdog 现在既可以判断人机验证时间是否距离申请时间太长，也可以在用户（未）通过人机挑战的同时删除验证消息和申请。在达成以上功能的同时，Telegram Watchdog 依然不存储任何用户数据。

本文将针对这两个功能实现的核心技术——消息签名——进行简单的解释。

## 为何之前版本没有？
由于 Telegram Watchdog 希望能够做到 100% 的隐私友好，因此在设计之初就将「不设数据存储」作为核心要求之一。

正因如此，发往用户的 CAPTCHA 验证 Web app 中仅有「希望加入的群组的 ID」这样一个参数。

这是因为：

- 在 Telegram API 中，通过/拒绝一位用户加群请求只需要用户 ID、用户希望加入的群组的 ID 两个参数
- 用户 ID 可以通过 Web app 对应的 API 进行获取（同时 Telegram 也有提供验证这些信息的方法）
- 活跃（生效）的群组加入请求本身可以验证这个用户发往 Telegram Watchdog 的群组 ID 是否有效
- Web app 本身与直接在浏览器访问网页并无二异，因此伪造请求的门槛很低，携带无法被验证的参数意义不大

简单来说，申请时间和验证消息两个参数无法在不含有数据库的框架中简单地被验证，因此早期 Telegram Watchdog 决定放弃这两个功能。

## 使用消息签名验证用户请求
[HMAC 哈希算法](https://zh.m.wikipedia.org/zh-tw/HMAC)被广泛用于数据真实性验证。简单来说，HMAC 会生成关于输入数据的「特征码（令牌）」，即使输入数据中有着细微改动，「特征码」也会发生变化。

利用这个原理，Telegram Watchdog 可以在收到入群申请的时候，将时间、验证消息 ID 等参数放入 HMAC 中生成令牌，然后将令牌连同参数放入 Telegram Watchdog 发往用户的入群请求中。

```typescript
export default async (msgId: number, chatId: number, userId: number, joinTime: number): Promise<string> => { 
   let signOri = `${msgId}, ${chatId}, ${userId}, ${joinTime}`  
   const sign = crypto.createHmac("sha256", process.env.TGWD_SECRET || "").update(signOri).digest('hex') 
   return sign 
 }
```

无论是生成哈希还是验证哈希，同样需要使用这段代码。通过将令牌（哈希结果）放入 Web app 请求 URL 中，Telegram Watchdog 可以确定用户的这个 CAPTCHA 验证距离其申请时间点的间隔（可避免部分「CAPTCHA 人工绕过服务」），以及在验证结束后删除验证消息，保证更好的用户体验。

## 自部署指南
Telegram Watchdog 的 HMAC 密钥并不是 hard coded 在代码中的，而是通过获取 `TGWD_SECRET` 环境变量的值作为 HMAC 密钥。

为了确保 HMAC 哈希加密起到应有的作用，请为您的 Telegram Watchdog 实例设置足够强的密钥。过于简单的密钥有可能会受到密钥比对攻击（用不同密钥加密确定的数据，以寻找到服务器端使用的密钥）的威胁。强烈建议您使用足够随机的随机字符串生成器生成一段较长的字符串作为密钥。

同时，请您保证不要将您的 HMAC 密钥泄露给任何人。如果您认为您的 HMAC 密钥遭到泄露，建议您对其进行更换。

*EOF*