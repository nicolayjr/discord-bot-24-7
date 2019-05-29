const Discord = require("discord.js")
const botconfig = require("botconfig.json");
const colours = require("colors.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {
    if(args[0] == "help") return message.channel.send(`Just do ${prefix}help instead.`)

    if(args[0]) {
        let command = args[0];
        if(bot.command.has(command)) {
            command = bot.command.get(command);
            var SHembed =new Discord.RichEmbed()
            .setColor(colours.cyan)
            .setAuthor(`Help`, message.guild.iconURL)
            .setDescription(`The bot prefix is: ${prefix}\n\n**Command:** ${command.config.name}\n**Description** ${command.config.description || "No description"}\n**Usage:** ${command.config.usage || "No usage"}\n**Accessable by:** ${command.config.accessableby || "members"}\n**aliases:** ${command.config.noalias || command.config.aliases}`)
        }}

    if(!args[0]) {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setAuthor(`Help command!`, message.guild.iconURL)
        .setColor(colours.cyan)
        .setDescription(`${message.channel} Check your DM's`)

        let Sembed = new Discord.RichEmbed()
        .setColor(colours.cyan)
        .setDescription(`Help`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setDescription(`These are the avalible commands for Shampoo assistance!\nThe bot command activate key is: ${prefix}`)
        .addField(`Commands:`, "``cat`` ``dog`` ``help`` ``serverinfo`` ``userinfo``")
        .setFooter("Shampoo assistance", bot.user.displayAvatarURL)
        message.channel.send(embed).then(m => m.delete(10000));
        message.author.send(Sembed)
    }
 }

module.exports.config = {
    name: "help",
    aliases: ["h", "halp", "commands"],
    usage: "!usage",
    description: "Every command is in this list!",
    accessableby: "members"
}
