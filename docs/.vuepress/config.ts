import { defineConfig } from "vuepress/config"

export default defineConfig({
  title: 'Telegram Watchdog',
  description: '全新的 Telegram 群组聊天滥用验证解决方案。',
  themeConfig: {
    nav: [
      { text: "帮助文档", link: "/help/"},
      { text: "常见问题", link: "/faq"},
      { text: "版本日志", link: "/changelogs/"},
      { text: "手边书", link: "/handbook/"},
      {
        text: "更多", 
        items: [
          { text: '在群组中启用', link: 'https://t.me/WatchdogVerifyBot?startgroup=start&admin=can_invite_users' },
          { text: '试用 + 社群', link: 'https://t.me/tgwatchdog_chat' },
          { text: '官方消息频道', link: 'https://t.me/tgwatchdog_update' },
          { text: '源码库', link: 'https://github.com/Astrian/tg-watchdog'}
        ]
      },
    ],
    sidebar: {
      "/help/": [
        '/help/',
        {
          title: "在群聊中启用",
          path: "/help/enable-in-groupchats/",
          children: [
            '/help/enable-in-groupchats/public-groups',
            '/help/enable-in-groupchats/private-groups'
          ]
        },
        '/help/get-verified'
      ],
      "/changelogs/": [
        {
          title: "最新版本",
          path: "/changelogs/2206.02"
        },
        {
          title: "2022",
          children: [
            '/changelogs/2206.02',
            '/changelogs/2206.01',
            '/changelogs/2204.01'
          ]
        }
      ],
      "/handbook/": [
        '/handbook/authorize-and-signature',
      ]
    }
  }
})