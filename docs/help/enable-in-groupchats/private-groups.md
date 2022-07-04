# In Private Groupchats
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

## Set Invite Link
In the groupchat you just added Telegram Watchdog, tap the avatar at the top-right corner. Then, enter groupchat settings by tap “Edit” at the top-right corner.

Tap “Invite Links” and get into the invite links management settings.

![Invite links list][image-3]

Tap “Create a New Link” button at the bottom of the page, and turn “Request Admin Approval” on at the page popped. Tap “Create” button after you confirmed the configuration.

![Invite link settings and share.][image-4]

After you created the new invite link, you can find it at the link list page. Tap this link and tap the ellipses button at the right side, you can copy or share this link.

::: tip DO NOT Use the Default Invite Link
There is a default invite link for a private groupchat in Telegram, which at the top of link list. The property of this invite link cannot be changes, which means that Telegram Watchdog cannot verify the new member joined with this invite link.

You can tap the ellipses button at the right side of this link and click “Revoke” to make sure everyone cannot join your groupchats with this link, if you shared this link before.

![撤销默认的邀请链接。][image-5]
:::

Done! Now you just share *the correct* invite link and the new members join your groupchat with this invite link will need to be verified by Telegram Watchdog before joining.

[1]:	https://t.me/WatchdogVerifyBot?startgroup=start&admin=can_invite_users

[image-1]:	./images/search-bot-and-set-as-admin.png
[image-2]:	./images/set-admin-permission.png
[image-3]:	./images/manage-private-group-links.png
[image-4]:	./images/create-and-share-invite-links.png
[image-5]:	./images/revoke-default-invite-link.jpeg