import { defineConfig } from "vuepress/config"

export default defineConfig({
  title: 'Telegram Watchdog',
  description: '全新的 Telegram 群组聊天滥用验证解决方案。',
  themeConfig: {
    sidebar: [
      '/welcome',
      {
        title: "开始",
        path: "/get-started/",
        children: [
          '/get-started/use-in-public-groups',
          '/get-started/use-in-private-groups'
        ]
      }
    ]
  }
})