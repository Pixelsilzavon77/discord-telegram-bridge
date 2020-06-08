# discord-telegram-bridge

![GitHub top language](https://img.shields.io/github/languages/top/daaniiieel/discord-telegram-bridge?style=for-the-badge) ![Maintenance](https://img.shields.io/maintenance/yes/2020?style=for-the-badge) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/ebfcea5b1b2b4780a7b1054d7760ef8a)](https://app.codacy.com/manual/daaniiieel/discord-telegram-bridge?utm_source=github.com&utm_medium=referral&utm_content=daaniiieel/discord-telegram-bridge&utm_campaign=Badge_Grade_Settings)![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/daaniiieel/discord-telegram-bridge?style=for-the-badge) ![npm](https://img.shields.io/npm/v/discord-telegram-bridge?style=for-the-badge)

A small and fast telegram to discord chat bridge, written in node 

#### Setup
> If you want to run it on heroku, you can just click the button below. 

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/filcnaplo/discord-telegram-bridge)

* Execute `npm install -g discord-telegram-bridge --production`
* Create a Discord webhook. You can do this by going to Server settings -> Webhooks. Copy the URL, you'll need it later.
* Set env variables: 

|Env variable|type|value|
|-|-|-|
|`TELEGRAM_BOT_TOKEN`|string|You can get this by speaking with @BotFather on telegram and creating a new bot.|
|`DISCORD_TOKEN`|string|The bot token for your Discord application. Create a new app at the  Discord Developer Portal , go to the bot section, click on Create a bot and copy the bot token it gives to you.|
|`TELEGRAM_CHAT_ID`|string|The ChatId of the telegram group you want to bridge.|
|`DISCORD_CHANNEL_ID`|string|The Discord ChannelId of the channel you want to bridge.|
|`webhook_id`  and  `webhook_token`|string|Those are part of the webhook URL you copied.  webhook_id  is a 18 characters long int,  webhook_token is a ~70 chars long randomly generated string. Those are seperated by slashes in the url.|
* Run `discord-telegram-bridge` and you're set!

#### Contributing
> Wondering what to contribute? The project has a codacy page at [https://app.codacy.com/manual/daaniiieel/discord-telegram-bridge/dashboard](https://app.codacy.com/manual/daaniiieel/discord-telegram-bridge/dashboard). On the issues tab, you can see all the code quality (mostly code style) issues we have. 
* Fork this github repo
* Clone your fork to your machine
* Execute `npm install` **without** the `--production` flag
* Write code
* Once done, `git add *` then  `git cz`. This uses Commitizen (installed automatically as a devDependency with `npm install`) to write beautiful commit messages
* Make a pull request from your fork to this repo
* After reviewing it, your code will be merged