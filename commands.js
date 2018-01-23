const Discord = require('discord.js')
const client = new Discord.Client();

let prefix = "/"
client.on("message", async msg => {
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;

    if(!msg.content.startsWith(prefix)) return;
    let member = msg.mentions.members.first()
    
    let lastmsg = ""
    if(member.lastMessage === null){
        lastmsg = "N/A"
    }
    else {
        lastmsg = `${member.lastMessage.createdAt}`
    }
    
    if(msg.content.startsWith(`${prefix}memberinfo`)) {
        let embed = new Discord.RichEmbed()
            .setTitle(`${member.user.tag}'s User Information`)
            .setDescription("This is the user's info")
            .setColor("#985986") 
            .addField("User's Avatar", `${member.user.avatar}`)
            .addField("User's Avatar URL", `${member.user.avatarURL}`)          
            .addField("Full Username", `${member.user.username}#${member.user.discriminator}`)
            .addField("Member Nickname", `${member.nickname}`)
            .addField("ID", `${member.user.id}`)
            .addField("User created on", `${member.user.createdAt.getTimezoneOffset()}`)
            .addField("User was last seen at", `${member.user.client.readyAt.getTimezoneOffset()}`)
            .addField("User last sent a message at", lastmsg)
            .addField("User's Current Status", `${member.user.presence.status}`)
            .addField("Game User is Playing", `${member.user.presence.game}`)
            .addField("Hoisted Role", `${member.hoistRole}`)
            .addField("Highest Role", `${member.highestRole}`)
            .setFooter(`Requested by ${msg.author.username}`)

        msg.channel.send(embed);
        

        return;
    } 

    if(msg.content.startsWith(`${prefix}channelinfo`)) {
        let channel = msg.mentions.channels.first()
        let embed = new Discord.RichEmbed()
        .setTitle(`${channel.name}'s Information`)
        .setDescription("This is the channel's info")
        .setColor("#985986")  
        .addField("ID", `${channel.id}`)          
        .addField("Channel Name", `${channel.name}`)
        .addField("Category", `${channel.parent}`)
        .addField("Category ID", `${channel.parentID}`)
        .setFooter(`Requested by ${msg.author.username}`)

    msg.channel.send(embed);

    return;
    }   
})