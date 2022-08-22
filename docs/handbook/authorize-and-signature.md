# Authorize and Signature
There was only one parameter (group ID) passed in CAPTCHA URL before the version 2206.02, which means, we excluded some useful parameters such as message ID or apply time. Plus, Telegram Watchdog has no database used for storage of any data, so some useful features, such as delete verification message or verify valid time, will not be available in earlier version of Telegram Watchdog.

After [version 2206.02][1], Telegram Watchdog supports the valid time of join request and delete verification message automatically when the candidate passed CAPTCHA or not. Plus, we still keep Telegram Watchdog database-less.

In this post, we will explain message signature, which used for those new features.

## Why Not Available Before?
When we start to develop Telegram Watchdog, we put the privacy at the top of the list. So, we decide that make it state-less and not to set database into Telegram Watchdog.

Because of that, only group ID the candidate want to join is inserted into the URL of CAPTCHA web app.

Here is why:

- Approve / decline a join request in Telegram API just need two parameters: the user ID and the group ID
- The user ID can be obtained in web app and Telegram provides the method to verify it
- The active join requests in groups help Telegram Watchdog verify the group ID is valid or not
- 

[1]:	http://localhost:8080/changelogs/2206.02.html