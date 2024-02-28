const Discord = require("discord.js");
const config = require("../config.json")
var pModule = require('../pubing.js');

/* EMBED */

var eHelp = new Discord.MessageEmbed()
    .setTitle("Voici Nos Commandes pour DMALL.")
    .addField(config.prefix + "pub token_bot", "à utiliser pour envoyer un message a tous les membres de ton serveur.")
    .addField(config.prefix + "puball token_bot", "à utiliser pour envoyer un message a tous les membres de tes serveurs.")
    .addField(config.prefix + "pub* token_bot", "à utiliser pour envoyer un message a tous les membres en lignes de ton serveur")
    .addField(config.prefix + "puball* token_bot", "à utiliser pour envoyer un message a tous les membres en lignes de tes serveurs.")
    .setColor(config.embedColor)

module.exports.run = async (client, message, args) => {
    message.channel.send(eHelp)
}

module.exports.help = {
    name: "help"
}