const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on('ready', () => {
  console.log('ready')
});

bot.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

bot.login(process.env.NTY2MjU1NjA0ODY4NDQ4Mjc2.XLCigQ.A8jxYbAcmwrjHLIFpNlBLzzLnAA);
