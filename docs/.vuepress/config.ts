import { defineConfig } from "vuepress/config"

export default defineConfig({
  title: 'Telegram Watchdog',
  description: '全新的 Telegram 群组聊天滥用验证解决方案。',
  themeConfig: {
    nav: [
      { text: "帮助文档", link: "/help/"},
      { text: "版本日志", link: "/changelogs/"},
      { text: "手边书", link: "/handbook/"},
      { text: "立即使用", link: "https://t.me/WatchdogVerifyBot?startgroup=start&admin=can_invite_users"},
    ],
    sidebar: {
      "/help/": [
        '/help/',
        {
          title: "开始",
          path: "/help/get-started/",
          children: [
            '/help/get-started/use-in-public-groups',
            '/help/get-started/use-in-private-groups'
          ]
        }
      ],
      "/changelogs/": [
        '/changelogs/2206.02',
        '/changelogs/2206.01',
        '/changelogs/2204.01'
      ],
      "/handbook/": [
        '/handbook/authorize-and-signature',
      ]
    }
  }
})