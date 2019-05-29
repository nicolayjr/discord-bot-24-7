const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online`)
  bot.user.setActivity("Do (.help) for the bot to take action");
  bot.user.setStatus('online')
})

bot.login(process.env.NTY2MjU1NjA0ODY4NDQ4Mjc2.XLCigQ.A8jxYbAcmwrjHLIFpNlBLzzLnAA);
