# Welcome to discord-telegram-bridge 👋

[![Version](https://img.shields.io/npm/v/discord-telegram-bridge.svg)](https://www.npmjs.com/package/discord-telegram-bridge)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/daaniiieel/discord-telegram-bridge#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/daaniiieel/discord-telegram-bridge/graphs/commit-activity)
[![License: GPL--3.0--or--later](https://img.shields.io/github/license/daaniiieel/discord-telegram-bridge)](https://github.com/daaniiieel/discord-telegram-bridge/blob/master/LICENSE)

> A simple, small and fast discord to telegram bridge written in node.js

## Install

```sh
npm install -g discord-telegram-bridge
```

## Usage

- Create a Discord bot.
- Create a Telegram bot by talking to botFather
- Create a Discord webhook. You can do this by going to Server settings -> Webhooks. Copy the URL, you'll need it later.

> If you want to run it on heroku, you can just click the button below.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/filcnaplo/discord-telegram-bridge)

- Set env variables:

| Env variable                     | type   | value                                                                                                                                                                                         |
| -------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TELEGRAM_BOT_TOKEN`             | string | You can get this by speaking with @BotFather on telegram and creating a new bot.                                                                                                              |
| `DISCORD_TOKEN`                  | string | The bot token for your Discord application. Create a new app at the Discord Developer Portal , go to the bot section, click on Create a bot and copy the bot token it gives to you.           |
| `TELEGRAM_CHAT_ID`               | string | The ChatId of the telegram group you want to bridge.                                                                                                                                          |
| `DISCORD_CHANNEL_ID`             | string | The Discord ChannelId of the channel you want to bridge.                                                                                                                                      |
| `webhook_id` and `webhook_token` | string | Those are part of the webhook URL you copied. webhook_id is a 18 characters long int, webhook_token is a ~70 chars long randomly generated string. Those are seperated by slashes in the url. |

```sh
discord-telegram-bridge
```

## Author

👤 **Daniel Vanko**

- Github: [@daaniiieel](https://github.com/daaniiieel)

## 🤝 Contributing

> Wondering what to contribute? The project has a codacy page at [https://app.codacy.com/manual/daaniiieel/discord-telegram-bridge/dashboard](https://app.codacy.com/manual/daaniiieel/discord-telegram-bridge/dashboard). On the issues tab, you can see all the code quality (mostly code style) issues we have.

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/daaniiieel/discord-telegram-bridge/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Daniel Vanko](https://github.com/daaniiieel).

This project is [GPL--3.0--or--later](https://github.com/daaniiieel/discord-telegram-bridge/blob/master/LICENSE) licensed.
