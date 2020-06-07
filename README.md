<h1 align="center"> 
Discord-Telegram-bridge
</h1>
<p align="center">
<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/daaniiieel/discord-telegram-bridge?style=for-the-badge"> <img alt="Maintenance" src="https://img.shields.io/maintenance/yes/2020?style=for-the-badge"> <img src="https://app.codacy.com/project/badge/Grade/baf2c94a5d0c43829481b703cb19bcc1"> <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/daaniiieel/discord-telegram-bridge?style=for-the-badge"> <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/daaniiieel/discord-telegram-bridge?style=for-the-badge"> 
 </p>
A small and fast telegram to discord chat bridge, written in node 

#### Setup
> If you want to run it on heroku, you can just click the button below. 

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/filcnaplo/discord-telegram-bridge)

* Clone the github repo
* Execute <kbd>npm install</kbd>
* Create a Discord webhook. You can do this by going to Server settings -> Webhooks. Copy the URL, you'll need it later.
* Set env variables: <br> <br>
| Env variable                   | type   | value                                                                                                                                                                                            |
|--------------------------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TELEGRAM_BOT_TOKEN             | string | you can get this by speaking with @BotFather on telegram and creating a new bot.                                                                                                                 |
| DISCORD_TOKEN                  | string | the bot token for your Discord application. Create a new app at the  Discord Developer Portal , go to the bot section, click on Create a bot and copy the bot token it gives to you.             |
| TELEGRAM_CHAT_ID               | string | The ChatId of the telegram group you want to bridge                                                                                                                                              |
| DISCORD_CHANNEL_ID             | string | The Discord ChannelId of the channel you want to bridge                                                                                                                                          |
| webhook_id  and  webhook_token | string | Those are part of the webhook URL you copied.  webhook_id  is a 18 characters long int,  webhook_token is a ~70 chars long randomly generated string. Those are seperated by slashes in the url. |
* Run <kbd>npm start</kbd> or <kbd>node server.js</kbd> and you're set!
