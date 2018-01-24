const Discord = require('discord.js')
const settings = require('./settings.json');
const client = new Discord.Client();
const guild = new Discord.Guild();

client.on("ready",  async () => {
    console.log(`Bot logged in as: ${client.user.username}`)
    client.user.setActivity("over DireClan", {type: "WATCHING"})
})

let prefix = "/"

client.on("message", async msg => {
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;

    let member = msg.mentions.members.first()
    
    if(msg.content.startsWith(`${prefix}stop`)){
        client.destroy()
    }


    if(msg.content.startsWith(`${prefix}memberinfo`)) {
        let embed = new Discord.RichEmbed()
            .setTitle(`${member.user.tag}'s User Information`)
            .setDescription("This is the user's info")
            .setColor("#985986") 
            .addField("User's Avatar URL", `${member.user.avatarURL}`)          
            .setThumbnail(member.user.avatarURL)
            .addField("ID", `${member.user.id}`, true)
            .addField("Full Username", `${member.user.username}#${member.user.discriminator}`, true)
            .addField("Member Nickname", `${member.nickname}`, true)
            .addBlankField()
            .addField("User joined Discord on", `${member.user.createdAt}`, true)
            .addField("User was last seen at", `${member.user.client.readyAt}`, true)
            .addBlankField()
            .addField("User's Current Status", `${member.user.presence.status}`, true)
            .addField("Game User is Playing", `${member.user.presence.game}`, true)
            .addBlankField()
            .addField("Hoisted Role", `${member.hoistRole}`, true)
            .addField("Highest Role", `${member.highestRole}`, true)
            .setFooter(`Requested by ${msg.author.username}`)

        msg.channel.send(embed);
        

        return;
    } 

    if(msg.content.startsWith(`${prefix}channelinfo`)) {
        let channel = msg.mentions.channels.first()
        let embed = new Discord.RichEmbed()
            .setTitle(`${channel.name}'s Information`)
            .setDescription("This is the vhannel's info")
            .setColor("#985986")  
            .addField("Category ID", `${channel.parentID}`, true)
            .addField("Category Name", `${channel.parent}`)        
            .addField("Channel ID", `${channel.id}`)          
            .addField("Channel Name", `${channel.name}`, true)
            .addField("Channel Type", `${channel.type}`)
            .setFooter(`Requested by ${msg.author.username}`)

    msg.channel.send(embed);

    return;
    }   

    if(msg.content.startsWith(`${prefix}categoryinfo`)) {
        let channel = msg.mentions.channels.first()
        if(!channel.type === "category") return;
        let chan = msg.mentions.channels.first()
        let embed = new Discord.RichEmbed()
            .setTitle(`${chan.name}'s Information`)
            .setDescription("This is the category's info")
            .setColor("#985986")  
            .addField("Category ID", `${chan.parentID}`, true)
            .addField("Category Name", `${chan.parent}`)        
            .addField("Children of Category", `${chan.parent.children}`)          
            .setFooter(`Requested by ${msg.author.username}`)

    msg.channel.send(embed);

    return;
    }   

    if(msg.content.startsWith(`${prefix}guildinfo`)) {
        let guild = msg.guild
        let embed = new Discord.RichEmbed()
            .setTitle(`${guild.name}'s Information`)
            .setDescription("This is the guild's info")
            .setColor("#985986")  
            .setThumbnail(guild.iconURL)
            .addField("Guild Acryonym", `${guild.nameAcronym}`, true)
            .addField("Guild Name", `${guild.name}`)        
            .addField("Number of Members", `${guild.memberCount}`)
            .addField("Name of System Channel", `${guild.systemChannel}`)
            .addField("Name of Default Channel", `${guild.defaultChannel}`) 
            .addField("Name of Default Role", `${guild.defaultRole}`)            
            .setFooter(`Requested by ${msg.author.username}`)

    msg.channel.send(embed);

    return;
    }   
    
    //Deletes the mention and prints a warning to author of mention.
    if(msg.mentions.members == true){ 
        const mentioned = msg.mentions.members.first()
        mentioned.send(msg.content)
        msg.delete()
    }

    //Sets System channel
    if(msg.content.startsWith(`${prefix}setsystem`)) {
        let channel = msg.mentions.channels.first()
        msg.guild.setSystemChannel(channel)
        msg.channel.send(`system channel set to ${channel}`)
    }
})

client.login(settings.token);
