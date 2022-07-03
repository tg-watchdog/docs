// docs/.vuepress/config.ts
import { defineConfig } from "vuepress/config";
var config_default = defineConfig({
  title: "Telegram Watchdog",
  description: "\u5168\u65B0\u7684 Telegram \u7FA4\u7EC4\u804A\u5929\u6EE5\u7528\u9A8C\u8BC1\u89E3\u51B3\u65B9\u6848\u3002",
  themeConfig: {
    nav: [
      { text: "\u5E2E\u52A9\u6587\u6863", link: "/help/" },
      { text: "\u7248\u672C\u65E5\u5FD7", link: "/changelogs/" },
      { text: "\u624B\u8FB9\u4E66", link: "/handbook/" },
      { text: "\u7ACB\u5373\u4F7F\u7528", link: "https://t.me/WatchdogVerifyBot?startgroup=start&admin=can_invite_users" }
    ],
    sidebar: {
      "/help/": [
        "/help/",
        {
          title: "\u5F00\u59CB",
          path: "/help/get-started/",
          children: [
            "/help/get-started/use-in-public-groups",
            "/help/get-started/use-in-private-groups"
          ]
        }
      ],
      "/changelogs/": [
        "/changelogs/2206.02",
        "/changelogs/2206.01",
        "/changelogs/2204.01"
      ],
      "/handbook/": [
        "/handbook/authorize-and-signature"
      ]
    }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidnVlcHJlc3MvY29uZmlnXCJcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgdGl0bGU6ICdUZWxlZ3JhbSBXYXRjaGRvZycsXG4gIGRlc2NyaXB0aW9uOiAnXHU1MTY4XHU2NUIwXHU3Njg0IFRlbGVncmFtIFx1N0ZBNFx1N0VDNFx1ODA0QVx1NTkyOVx1NkVFNVx1NzUyOFx1OUE4Q1x1OEJDMVx1ODlFM1x1NTFCM1x1NjVCOVx1Njg0OFx1MzAwMicsXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgbmF2OiBbXG4gICAgICB7IHRleHQ6IFwiXHU1RTJFXHU1MkE5XHU2NTg3XHU2ODYzXCIsIGxpbms6IFwiL2hlbHAvXCJ9LFxuICAgICAgeyB0ZXh0OiBcIlx1NzI0OFx1NjcyQ1x1NjVFNVx1NUZEN1wiLCBsaW5rOiBcIi9jaGFuZ2Vsb2dzL1wifSxcbiAgICAgIHsgdGV4dDogXCJcdTYyNEJcdThGQjlcdTRFNjZcIiwgbGluazogXCIvaGFuZGJvb2svXCJ9LFxuICAgICAgeyB0ZXh0OiBcIlx1N0FDQlx1NTM3M1x1NEY3Rlx1NzUyOFwiLCBsaW5rOiBcImh0dHBzOi8vdC5tZS9XYXRjaGRvZ1ZlcmlmeUJvdD9zdGFydGdyb3VwPXN0YXJ0JmFkbWluPWNhbl9pbnZpdGVfdXNlcnNcIn0sXG4gICAgXSxcbiAgICBzaWRlYmFyOiB7XG4gICAgICBcIi9oZWxwL1wiOiBbXG4gICAgICAgICcvaGVscC8nLFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6IFwiXHU1RjAwXHU1OUNCXCIsXG4gICAgICAgICAgcGF0aDogXCIvaGVscC9nZXQtc3RhcnRlZC9cIixcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgJy9oZWxwL2dldC1zdGFydGVkL3VzZS1pbi1wdWJsaWMtZ3JvdXBzJyxcbiAgICAgICAgICAgICcvaGVscC9nZXQtc3RhcnRlZC91c2UtaW4tcHJpdmF0ZS1ncm91cHMnXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCIvY2hhbmdlbG9ncy9cIjogW1xuICAgICAgICAnL2NoYW5nZWxvZ3MvMjIwNi4wMicsXG4gICAgICAgICcvY2hhbmdlbG9ncy8yMjA2LjAxJyxcbiAgICAgICAgJy9jaGFuZ2Vsb2dzLzIyMDQuMDEnXG4gICAgICBdLFxuICAgICAgXCIvaGFuZGJvb2svXCI6IFtcbiAgICAgICAgJy9oYW5kYm9vay9hdXRob3JpemUtYW5kLXNpZ25hdHVyZScsXG4gICAgICBdXG4gICAgfVxuICB9XG59KSJdLAogICJtYXBwaW5ncyI6ICI7QUFBQTtBQUVBLElBQU8saUJBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxJQUNYLEtBQUs7QUFBQSxNQUNILEVBQUUsTUFBTSw0QkFBUSxNQUFNO0FBQUEsTUFDdEIsRUFBRSxNQUFNLDRCQUFRLE1BQU07QUFBQSxNQUN0QixFQUFFLE1BQU0sc0JBQU8sTUFBTTtBQUFBLE1BQ3JCLEVBQUUsTUFBTSw0QkFBUSxNQUFNO0FBQUE7QUFBQSxJQUV4QixTQUFTO0FBQUEsTUFDUCxVQUFVO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSU4sZ0JBQWdCO0FBQUEsUUFDZDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUE7QUFBQSxNQUVGLGNBQWM7QUFBQSxRQUNaO0FBQUE7QUFBQTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
