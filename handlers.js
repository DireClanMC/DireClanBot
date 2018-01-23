const Discord = require('discord.js')
const client = new Discord.Client();

client.on("message", async msg => {
    if(msg.mentions.everyone === true){
        msg.delete()
        msg.channel.send("Hey!! No pinging the entire server. That can be right annoying")
    }
})