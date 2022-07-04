# Frequently Asked Questions

## Why “join request” not enabled when I turn this on?
This is a known bug in out-of-dated version of Telegram on iOS. You will see the setting will be reseted when you back to the settings page after you turn join request on.

Don’t worry, the setting will be applied after you tap “Done” button. However, we advise you to re-enable this switch when you get into the page by accidentally.

We advise you to upgrade your Telegram app. Only “Approve New Members” switch in the latest version and you just enable it to enable join request for your public groupchats.

## My groupchat used for comments with channels. Can I use Telegram Watchdog?
Yes, but Telegram Watchdog requires join request feature which will block strangers to comment on your channel.

We advise you that consider other anti-spam solutions if you need to allow strangers to comment on your channel.

## Someone says that they cannot join the groupchat. What happened?
The join request feature are not available on older version of Telegram app, so they may not be able to join your groupchat with out-of-dated Telegram app.

Here is some advise:

- Advise your new members to upgrade Telegram app
- Try Telegram app on other OSs or platforms
- Invite them into groupchat (not only admins, but also members have rights invite others)

## Why it reminds me that Telegram Watchdog will collect my IP address?
This is the unified reminds across all Telegram web app.

Use Telegram web app, which uses the technology stack similar to general web, is similar to visit a webpage. The web request will have your IP address in order to send response to you.

Don’t worry. Telegram Watchdog don’t have database, and will not collect and share your any personal information. You can dive into the [source code][1] to find out how Telegram Watchdog process your data.

## Can I deploy my own Telegram Watchdog?
Sure! However, the detailed self-deploy guide are not available now. (Soon! I promise!)

## Can I use other Telegram Watchdog instance operated by third-parties?
Yes, if the owner of third-party Telegram Watchdog instance allows you to do that.

However, Telegram Watchdog project is not responsible for Telegram Watchdog instances deployed by third-parties, for they may have some modifications in their Telegram Watchdog instances. Some modifications are good - those modifications enlarged the abilities of Telegram Watchdog, but somebody may collect your privacy with modified Telegram Watchdog.

Please make sure that you are fully trust the owner of third-party Telegram Watchdog instance, otherwise it may pose a privacy risk to your groupchats!

[1]:	https://github.com/Astrian/tg-watchdog