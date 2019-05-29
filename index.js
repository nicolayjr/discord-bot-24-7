const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online`)
  bot.user.setActivity("Do (.help) for the bot to take action");
  bot.user.setStatus('online')
})
