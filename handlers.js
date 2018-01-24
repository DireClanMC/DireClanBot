const Discord = require('discord.js')
const client = new Discord.Client();

client.on("message", async msg => {
    if(msg.mentions.everyone === true){
        msg.delete()
        msg.channel.send("Pinging the entire server is not allowed!")
    }
})
