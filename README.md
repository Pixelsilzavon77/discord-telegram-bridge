<h1 align="center"> 
Discord-Telegram-bridge
</h1>
 
A small and fast telegram to discord chat bridge, written in node 
#### Setup:
* Clone the github repo
* Execute <kbd>npm install</kbd>
* Create a Discord webhook. YOu can do this by going to Server settings -> Webhooks. Copy the URL, you'll need it later.
* Set env variables:
<kbd>TELEGRAM_BOT_TOKEN</kbd> - you can get this by speaking with @BotFather on telegram and creating a new bot. <br>
<kbd>DISCORD_TOKEN</kbd> - the bot token for your Discord application. Create a new app at the [Discord Developer Portal](https://discord.com/developers/applications), go to the bot section, click on Create a bot and copy the bot token it gives to you. <br>
<kbd>TELEGRAM_CHAT_ID</kbd> - The ChatId of the telegram group you want to bridge <br>
<kbd>DISCORD_CHANNEL_ID</kbd> - The Discord ChannelId of the channel you want to bridge <br>
<kbd>webhook_id</kbd> and <kbd>webhook_token</kbd>. Those are part of the webhook URL you copied. <kbd>webhook_id</kbd> is a 18 characters long int, <kbd>webhook_token</kbd> is a ~70 chars long randomly generated string. Those are seperated by slashes in the url. <br>

* Run <kbd>npm start</kbd> or <kbd>node server.js</kbd> and you're set!
