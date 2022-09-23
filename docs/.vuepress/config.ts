import { defineConfig } from "vuepress/config"

export default defineConfig({
  themeConfig: {
    locales: {
      "/": {
        nav: [
          { text: "Help Documents", link: "/help/"},
          { text: "FAQ", link: "/faq"},
          { text: "Changelogs", link: "/changelogs/"},
          { text: "Handbook", link: "/handbook/"},
          {
            text: "More", 
            items: [
              { text: 'Enable in groupchats', link: 'https://t.me/WatchdogVerifyBot?startgroup=start&admin=can_invite_users' },
              { text: 'Try + community', link: 'https://t.me/tgwatchdog_chat' },
              { text: 'Official channel', link: 'https://t.me/tgwatchdog_update' },
              { text: 'Source code', link: 'https://github.com/Astrian/tg-watchdog'},
              { text: 'Privacy', link: '/privacy'}
            ]
          },
        ],
        sidebar: {
          "/help/": [
            '/help/',
            {
              title: "Enable in Groupchats",
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
              title: "Latest version",
              path: "/changelogs/2209.01"
            },
            {
              title: "2022",
              children: [
                '/changelogs/2209.01',
                '/changelogs/2208.02',
                '/changelogs/2208.01',
                '/changelogs/2207.01',
                '/changelogs/2206.02',
                '/changelogs/2206.01',
                '/changelogs/2204.01'
              ]
            }
          ],
          "/handbook/": [
            '/handbook/authorize-and-signature',
          ]
        },
        selectText: 'Choose Language',
        label: 'English (US)',
        ariaLabel: 'Languages'
      },
      "/zh/": {
        nav: [
          { text: "帮助文档", link: "/zh/help/"},
          { text: "常见问题", link: "/zh/faq"},
          { text: "版本日志", link: "/zh/changelogs/"},
          { text: "手边书", link: "/zh/handbook/"},
          {
            text: "更多", 
            items: [
              { text: '在群组中启用', link: 'https://t.me/WatchdogVerifyBot?startgroup=start&admin=can_invite_users' },
              { text: '试用 + 社群', link: 'https://t.me/tgwatchdog_chat' },
              { text: '官方消息频道', link: 'https://t.me/tgwatchdog_update' },
              { text: '源码库', link: 'https://github.com/Astrian/tg-watchdog'},
              { text: '隐私', link: '/privacy'}
            ]
          },
        ],
        sidebar: {
          "/zh/help/": [
            '/zh/help/',
            {
              title: "在群聊中启用",
              path: "/zh/help/enable-in-groupchats/",
              children: [
                '/zh/help/enable-in-groupchats/public-groups',
                '/zh/help/enable-in-groupchats/private-groups'
              ]
            },
            '/zh/help/get-verified'
          ],
          "/zh/changelogs/": [
            {
              title: "最新版本",
              path: "/zh/changelogs/2209.01"
            },
            {
              title: "2022",
              children: [
                '/zh/changelogs/2209.01',
                '/zh/changelogs/2208.02',
                '/zh/changelogs/2208.01',
                '/zh/changelogs/2207.01',
                '/zh/changelogs/2206.02',
                '/zh/changelogs/2206.01',
                '/zh/changelogs/2204.01'
              ]
            }
          ],
          "/zh/handbook/": [
            '/zh/handbook/authorize-and-signature',
          ]
        },
        selectText: '选择语言',
        label: '简体中文'
      }
    }
  },
  locales: {
    "/": {
      lang: "en-US",
      title: "Telegram Watchdog",
      description: "The brand-new solution for anti-abuse from Telegram groupchats."
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Telegram Watchdog",
      description: "全新的 Telegram 群组聊天滥用验证解决方案。"
    }
  }
})