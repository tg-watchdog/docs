---
prev: /help/enable-in-groupchats/
---
# In Public Groupchats
::: tip Details may Varies
In this document, we will introduce the detailed steps with official Telegram client on an iPhone with “English” OS language setting.

Some details may varies according to your device, OS or language settings. However, the steps are highly similar between those situations and you can adjust your operation according to the actual situation.
:::
## Set as Admin
Search “WatchdogVerifyBot” on Telegram and find “Telegram Watchdog”. Tap it and tap “Start” button at the bottom. Then the bot will reply a message. Tap the “Set me as group admin” button below the message.

![Search Telegram Watchdog and click “Start”.][image-1]

::: tip One-Tap Way to Add Bot
You can also click [this link][1] to direct to Telegram app, and continue the tutorial (same effect between two ways).
:::

After that, Telegram will pop up a chat selector. Find the groupchat you want to enable Telegram Watchdog.

In next step, Telegram will ask you that do you wish to add bot as admin. Keep “Admin Rights” switch on, and enable “Invite Users via Link” permission.

Tap “Add Bot as Admin” after you confirmed the config.

![Set bot as admin.][image-2]

::: tip Need Admin Permission
To do so, you must be the owner of the groupchat, or you have “Invite Users via Link” and “Add New Admins” permission of the groupchat.
:::

## Enable Join Request
In the groupchat you just added Telegram Watchdog, tap the avatar at the top-right corner. Then, enter groupchat settings by tap “Edit” at the top-right corner.

Tap “Group Type” and get into the type management settings.

![Group settings for public groups, and the group type settings.][image-3]

In this page, turn “Approve New Members” on, then tap “Done” at the top-right corner. Now, the join request are enabled in this group, and the Telegram Watchdog will be activated when new members send the join request to the groupchat.

::: tip I Cannot See this Switch!
If your Telegram app is out-of-dated for some version, you may not see this switch but have “Who can send messages” configuration. Set it as “Only Members” and you will see this switch. Turn this switch on and go on.

However, if you cannot see neither configurations, you may consider to upgrade your Telegram app.
:::

[1]:	https://t.me/WatchdogVerifyBot?startgroup=start&admin=can_invite_users

[image-1]:	./images/search-bot-and-set-as-admin.png
[image-2]:	./images/set-admin-permission.png
[image-3]:	./images/turn-approval-on-in-public-groups.png