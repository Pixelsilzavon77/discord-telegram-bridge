const fetch = require("node-fetch");

const wakeUpDyno = (url, interval = 25, callback) => {
    const milliseconds = interval * 60000;
    setTimeout(() => {

        try { 
            console.log("setTimeout called.");
            // HTTP GET request to the dyno's url
            fetch(url).then(() => console.log(`Fetching ${url}.`)); 
        }
        catch (err) { // catch fetch errors
            console.log(`Error fetching ${url}: ${err.message} 
            Will try again in ${interval} minutes...`);
        }
        finally {

            try {
                callback(); // execute callback, if passed
            }
            catch (e) { // catch callback error
                callback ? console.log("Callback failed: ", e.message) : null;
            }
            finally {
                // do it all again
                return wakeUpDyno(url, interval, callback);
            }
            
        }

    }, milliseconds);
};

// heroku specific
const express = require("express"); 

const PORT = process.env.PORT; 
const DYNO_URL = process.env.DYNO_URL || "https://google.com"; //dyno url

const app = express();
app.get("/", function(req, res) {
  res.send("Hello world! you have reached the secret inner workings of the FILC BOT");
});
app.listen(PORT, () => {
    wakeUpDyno(DYNO_URL); // will start once server starts
})

const Discord = require("discord.js");
const client = new Discord.Client();
var telegram = require("natsvora-telegram-bot-api");

// import env variables
var telegramToken = process.env.TELEGRAM_BOT_TOKEN
const DISCORD_TOKEN = process.env.DISCORD_TOKEN
var telegram_chat_id = process.env.TELEGRAM_CHAT_ID
var discordChannelId = process.env.discordChannelId;

const webhookClient = new Discord.WebhookClient(
  process.env.webhook_id,
  process.env.webhook_token
);
// initializes the telegram bot and starts listening for updates (new messages)
var api = new telegram({
  token: telegramToken,
  updates: {
    enabled: true
  }
});

client.once("ready", () => {
  console.log("Discord bot ready!");
});
// initializes discord bot

client.login(DISCORD_TOKEN);

// if the discord bot receives a message
client.on("message", message => {
  if (
    // the program currently check if the message's from a bot to check for duplicates. This isn't the best method but it's good enough. A webhook counts as a bot in the discord api, don't ask me why.
    message.channel.id === discordChannelId &&
    message.author.bot == false
  ) {
    let mentioned_usernames = []
for(let mention of message.mentions.users){mentioned_usernames.push("@"+mention[1].username)}
    var attachment_urls = []
    for(let attachment of message.attachments){
      attachment_urls.push(attachment[1].url)
    }
    // attachment_urls is empty when there are no attachments so we can be just lazy
    var final_message_content = message.content.replace(/<@.*>/gi, '')
    api.sendMessage({
      chat_id: telegram_chat_id,
      text: message.author.username + ": "+final_message_content + " "+ attachment_urls.join(' ') + mentioned_usernames.join(" ")
    });
 
  }
});

var photo_url = "";
api.on("message", function(message) {
  // console.log(message)
  var file_path = ""
  if (message.chat.id == telegram_chat_id && message.from.is_bot == false) {
        // this part gets the user profile photos as the variable names suggest
        let getProfilePic = new Promise(function(resolve, reject) {
          var profilePhotos = api.getUserProfilePhotos({ user_id: message.from.id });
          profilePhotos.then(function(data) {
                // if user has a profile photo
                if (data.total_count > 0) {
                  var file = api.getFile({ file_id: data.photos[0][0].file_id });
                  file.then(function(result) {
                    var file_path = result.file_path;

                    resolve("https://api.telegram.org/file/bot" + telegramToken + "/" + file_path)

                  });
                } else {
                    //console.log("telegram pfp")
                    resolve("https://telegram.org/img/t_logo.png");
                  }
                });
        });
        getProfilePic.then(function(profile_url) { 
          // if the message contains media
          if (message.document || message.photo || message.sticker) {
            if (message.document) {
              var document = api.getFile({ file_id: message.document.file_id });
              document.then(function(data) {
                var document_url =
                  "https://api.telegram.org/file/bot" + telegramToken + "/" +  data.file_path;
                webhookClient.send(message.caption, {
                  username: message.from.first_name,
                  avatarURL: profile_url,
                  files: [document_url]
                });
              });
            }
            if(message.sticker){
              var sticker = api.getFile({ file_id: message.sticker.file_id })
              sticker.then(function(data) {
                var sticker_url =
                  "https://api.telegram.org/file/bot" + telegramToken + "/" +  data.file_path;
                webhookClient.send(message.caption, {
                  username: message.from.first_name,
                  avatarURL: profile_url,
                  files: [sticker_url]
                });
              });
          }
            if (message.photo) {
              var photo = api.getFile({ file_id: message.photo[0].file_id });
              photo.then(function(data) {
                var photo_url =
                  "https://api.telegram.org/file/bot" + telegramToken +"/" +data.file_path;
                webhookClient.send(message.caption, {
                  username: message.from.first_name,
                  avatarURL: profile_url,
                  files: [photo_url]
                });
              });
            }
          } else {
            webhookClient.send(message.text, {
              username: message.from.first_name,
              avatarURL: profile_url
            });
          } })
         
      }
    });
