const Discord = require('discord.js');
require("./inlineReply.js")
const client = new Discord.Client();


client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', message => {
  if (message.content == "failsafe") process.exit()
  if (message.content == "what is the source of this bot?") message.inlineReply("https://go.blobby.me/askforpermission")
  if (message.author.bot) return
  if (process.env.IGNORE_USER_IDS.split(",").includes(message.author.id)) return
  message.inlineReply("Did you ask for permission to send that message?")

});

client.login(process.env.TOKEN);