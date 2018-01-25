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
    
    if(msg.content.startsWith(`${prefix}help`)){
        let embed = new Discord.RichEmbed()
            .setTitle("Help")
            .setColor("#985986")
            .addField("/memberinfo", "Displays detailed information on a specific Member")
            .addField("/channelinfo", "Displays detailed information on a specific channel")
            .addField("/categoryinfo", "Displays detailed information on a specific category")
            .addField("/guildinfo", "Displays detailed information on the current guild")
            .addField("/roleinfo", "Displays detailed information on a specific role")
            
        msg.channel.send(embed)
    }

    if(msg.content.startsWith(`${prefix}stop`)){
        client.destroy()
    }


    if(msg.content.startsWith(`${prefix}memberinfo`)) {
        let note = ""
        if(member.highestRole == member.hoistRole){
            note = "This user's highest role is also hoisted"
        }
        else {
            note = member.hoistRole;
        }
        let roles = member.roles.map(x => x)
        let embed = new Discord.RichEmbed()
            .setTitle(`${member.user.username}'s User Information`)
            .setColor("#985986") 
            .addField("User's Avatar URL", `${member.user.avatarURL}`)          const Discord = require('discord.js')
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

    let messageArray = msg.content.split(" ")
    let args = messageArray.slice(1)

    let member = msg.mentions.members.first()
    
    if(msg.content.startsWith(`${prefix}help`)){
        let embed = new Discord.RichEmbed()
            .setTitle("Help")
            .setColor("#985986")
            .addField("/memberinfo", "Displays detailed information on a specific Member")
            .addField("/channelinfo", "Displays detailed information on a specific channel")
            .addField("/categoryinfo", "Displays detailed information on a specific category")
            .addField("/guildinfo", "Displays detailed information on the current guild")
            .addField("/roleinfo", "Displays detailed information on a specific role")
            
        msg.channel.send(embed)
    }

    if(msg.content.startsWith(`${prefix}stop`)){
        client.destroy()
    }


    if(msg.content.startsWith(`${prefix}memberinfo`)) {
        let note = ""
        if(member.highestRole == member.hoistRole){
            note = "This user's highest role is also hoisted"
        }
        else {
            note = member.hoistRole;
        }
        let roles = member.roles.map(x => x)
        let roleslist = roles.join(",")
        let embed = new Discord.RichEmbed()
            .setTitle(`${member.user.username}'s User Information`)
            .setColor("#985986") 
            .addField("User's Avatar URL", `${member.user.avatarURL}`)          
            .setThumbnail(member.user.avatarURL)
            .addField("ID", `${member.user.id}`, true)
            .addField("Full Username", `${member.user.username}#${member.user.discriminator}`, true)
            .addField("Member Nickname", `${member.nickname}`, true)
            .addBlankField()
            .addField("User created on", `${member.user.createdAt}`, true)
            .addField("ID of Users last msg", `${member.lastMessageID}`)
            .addBlankField()
            .addField("User's Current Status", `${member.user.presence.status}`, true)
            .addField("Game User is Playing", `${member.user.presence.game}`, true)
            .addBlankField()
            .addField("Roles", `${roleslist}`, true)
            .addField("Hoisted Role", `${note}`, true)
            .addField("Highest Role", `${member.highestRole}`, true)
            .setFooter(`Requested by ${msg.author.username}`)
        
        msg.delete()
        msg.channel.send(embed);
        

        return;
    } 

    if(msg.content.startsWith(`${prefix}findmsg`)) {
        let messageArray = msg.content.split(" ")
        let args = messageArray.slice(1);
        msg.channel.fetchMessage(args)
        msg.channel.send(msg.content)
        console.log(args)
    }

    if(msg.content.startsWith(`${prefix}channelinfo`)) {
        let channel = msg.mentions.channels.first()
        let embed = new Discord.RichEmbed()
            .setTitle(`${channel.name}'s Information`)
            .setColor("#985986")  
            .addField("Category ID", `${channel.parentID}`, true)
            .addField("Category Name", `${channel.parent}`)        
            .addField("Channel ID", `${channel.id}`)          
            .addField("Channel Name", `${channel.name}`, true)
            .addField("Channel Type", `${channel.type}`)
            .setFooter(`Requested by ${msg.author.username}`)

        msg.delete()
        msg.channel.send(embed);

        return;
    }   

    if(msg.content.startsWith(`${prefix}categoryinfo`)) {
        let channel = msg.mentions.channels.first()
        if(!channel.type === "category") return;
        let chan = msg.mentions.channels.first()
        let child = chan.parent.children.map(y => y)
        let embed = new Discord.RichEmbed()
            .setTitle(`${chan.name}'s Information`)
            .setColor("#985986")  
            .addField("Category ID", `${chan.parentID}`, true)
            .addField("Category Name", `${chan.parent}`)        
            .addField("Children of Category", `${child}`)          
            .setFooter(`Requested by ${msg.author.username}`)

        msg.delete()
        msg.channel.send(embed);

        return;
    }   

    if(msg.content.startsWith(`${prefix}guildinfo`)) {
        let guild = msg.guild
        let roles = guild.roles.map(q => q)
        let roleslist = roles.join(",")
        let members = guild.members.map(p => p)
        let fusers = guild.members.filter(m=>!m.user.bot)
        let fbots = guild.members.filter(m=>m.user.bot)
        let gusers = fusers.map(u => u)
        let bots = fbots.map(i => i)
        let onlinemems = guild.members.filter((u) => (u.presence.status === 'online'))
        let online = onlinemems.map(l => l)
        let offlinemems = guild.members.filter((u) => (u.presence.status === 'offline'))
        let offline = offlinemems.map(k => k)
        let users = guild.memberCount - guild.members.filter(m=>m.user.bot).size
        let embed = new Discord.RichEmbed()
            .setTitle(`${guild.name}'s Information`)
            .setColor("#985986")  
            .setThumbnail(guild.iconURL)
            .addField("Guild's Icon Url", `${guild.iconURL}`)
            .addField("Guild Acryonym", `${guild.nameAcronym}`, true)
            .addField("Guild Name", `${guild.name}`, true) 
            .addBlankField()
            .addField("Full Username of Owner", `${guild.owner.user.tag}`, true) 
            .addField("Nick of Owner", `${guild.owner.nickname}`, true)
            .addBlankField()
            .addField("Members in Guild", `${members}`,true)       
            .addField("Total Number of Members", `${guild.memberCount}`)
            .addField("Users in Guild", `${gusers}`, true)
            .addField("Number of Users", `${guild.memberCount - guild.members.filter(m=>m.user.bot).size}`)
            .addField("Bots in Guild", `${bots}`, true)
            .addField("Number of Bots", `${guild.members.filter(m=>m.user.bot).size}`)
            .addField("Members currently online", `${online}`, true) 
            .addField("Online Users", `${client.users.filter((u) => (u.presence.status === 'online')).size}`)
            .addField("Members currently offline", `${offline}`, true)
            .addField("Offline Users", `${client.users.filter((u) => (u.presence.status !== 'online')).size}`)
            .addBlankField()
            .addField("Name of System Channel", `${guild.systemChannel}`)
            .addField("Name of Default Role", `${guild.defaultRole}`)    
            .addField("Roles in Guild", `${roleslist}`)      
            .setFooter(`Requested by ${msg.author.username}`)

        msg.delete()
        msg.channel.send(embed);

        return;
    }   
    
    if(msg.content.startsWith(`${prefix}roleinfo`)) {
        let role = msg.mentions.roles.first()
        let rmembers = role.members.map(z => z)
        let embed = new Discord.RichEmbed()
            .setTitle(`${role.name}'s Information`)
            .setColor("#985986")  
            .addField("Role Name", `${role.name}`) 
            .addField("Role Created on",`${role.createdAt}`)
            .addField("Is role managed", `${role.managed}`)
            .addField("Members with Role", `${rmembers}`)      
            .addField("Position of Role", `${role.position}`)
            .addField("Is Role mentionable?", `${role.mentionable}`)            
            .addField("Is Role hoisted?", `${role.hoist}`) 
            .addField("Number of members in role", `${role.members.size}`)
            .addField("Permissions", `${role.serialize()}`)
            .setFooter(`Requested by ${msg.author.username}`)

        msg.delete()
        msg.channel.send(embed);

        return;
    }   

    //Sends a DM to mentioned User (This makes tracking down mentions easier and keeps things organized).
    if(msg.isMentioned(member) === true){ 
        const mentioned = msg.mentions.members.first()
        let embed = new Discord.RichEmbed()
            .setTitle(`A Member mentioned you in ${msg.guild}`)
            .setDescription(`You received this because you were mentioned in ${msg.guild}, below is further details of the mention`)
            .setColor("#985986")  
            .setThumbnail(msg.author.avatarURL)
            .addField("Message", `${msg.content}`)
            .setFooter(`You were mentioned by ${msg.author.username}`)

        let embedr = new Discord.RichEmbed()
            .setTitle(`You mentioned a member in ${msg.guild}`)
            .setDescription("This is your copy of the mention sent to the user you mentioned")
            .setColor("#985986")  
            .setThumbnail(msg.author.avatarURL)
            .addField("Message", `${msg.content}`)
            .setFooter(`You mentioned ${mentioned.nickname}`)

        mentioned.send(embed)
        msg.author.send(embedr)
    }

    //Sets System channel
    if(msg.content.startsWith(`${prefix}setsystem`)) {
        let channel = msg.mentions.channels.first()
        msg.guild.setSystemChannel(channel)
        msg.channel.send(`system channel set to ${channel}`)
    }
})

client.on("guildMemberAdd", member => {
    let memberrole = guild.createRole({
        name : member.displayName,
        color :  "GREEN"   
    })
    member.addRole(memberrole)
})

client.login(settings.token);

            .setThumbnail(member.user.avatarURL)
            .addField("ID", `${member.user.id}`, true)
            .addField("Full Username", `${member.user.username}#${member.user.discriminator}`, true)
            .addField("Member Nickname", `${member.nickname}`, true)
            .addBlankField()
            .addField("User created on", `${member.user.createdAt}`, true)
            .addField("ID of Users last msg", `${member.lastMessageID}`)
            .addBlankField()
            .addField("User's Current Status", `${member.user.presence.status}`, true)
            .addField("Game User is Playing", `${member.user.presence.game}`, true)
            .addBlankField()
            .addField("Roles", `${roles}`, true)
            .addField("Hoisted Role", `${note}`, true)
            .addField("Highest Role", `${member.highestRole}`, true)
            .setFooter(`Requested by ${msg.author.username}`)
        
        msg.delete()
        msg.channel.send(embed);
        

        return;
    } 

    if(msg.content.startsWith(`${prefix}findmsg`)) {
        let messageArray = msg.content.split(" ")
        let args = messageArray.slice(1);
        msg.channel.fetchMessage(args)
        msg.channel.send(msg.content)
        console.log(args)
    }

    if(msg.content.startsWith(`${prefix}channelinfo`)) {
        let channel = msg.mentions.channels.first()
        let embed = new Discord.RichEmbed()
            .setTitle(`${channel.name}'s Information`)
            .setColor("#985986")  
            .addField("Category ID", `${channel.parentID}`, true)
            .addField("Category Name", `${channel.parent}`)        
            .addField("Channel ID", `${channel.id}`)          
            .addField("Channel Name", `${channel.name}`, true)
            .addField("Channel Type", `${channel.type}`)
            .setFooter(`Requested by ${msg.author.username}`)

        msg.delete()
        msg.channel.send(embed);

        return;
    }   

    if(msg.content.startsWith(`${prefix}categoryinfo`)) {
        let channel = msg.mentions.channels.first()
        if(!channel.type === "category") return;
        let chan = msg.mentions.channels.first()
        let child = chan.parent.children.map(y => y)
        let embed = new Discord.RichEmbed()
            .setTitle(`${chan.name}'s Information`)
            .setColor("#985986")  
            .addField("Category ID", `${chan.parentID}`, true)
            .addField("Category Name", `${chan.parent}`)        
            .addField("Children of Category", `${child}`)          
            .setFooter(`Requested by ${msg.author.username}`)

        msg.delete()
        msg.channel.send(embed);

        return;
    }   

    if(msg.content.startsWith(`${prefix}guildinfo`)) {
        let guild = msg.guild
        let roles = guild.roles.map(q => q)
        let members = guild.members.map(p => p)
        let onlinemems = guild.members.filter((u) => (u.presence.status === 'online'))
        let online = onlinemems.map(l => l)
        let offlinemems = guild.members.filter((u) => (u.presence.status === 'offline'))
        let offline = offlinemems.map(k => k)
        let users = guild.memberCount - guild.members.filter(m=>m.user.bot).size
        let embed = new Discord.RichEmbed()
            .setTitle(`${guild.name}'s Information`)
            .setColor("#985986")  
            .setThumbnail(guild.iconURL)
            .addField("Guild's Icon Url", `${guild.iconURL}`)
            .addField("Guild Acryonym", `${guild.nameAcronym}`, true)
            .addField("Guild Name", `${guild.name}`) 
            .addField("Full Username of Owner", `${guild.owner.user.tag}`) 
            .addField("Nick of Owner", `${guild.owner.nickname}`)
            .addField("Members in Guild", `${members}`)       
            .addField("Total Number of Members", `${guild.memberCount}`)
            .addField("Number of Users", `${guild.memberCount - guild.members.filter(m=>m.user.bot).size}`)
            .addField("Number of Bots", `${guild.members.filter(m=>m.user.bot).size}`)
            .addField("Members currently online", `${online}`) 
            .addField("Online Users", `${client.users.filter((u) => (u.presence.status === 'online')).size}`)
            .addField("Members currently offline", `${offline}`)
            .addField("Offline Users", `${client.users.filter((u) => (u.presence.status === 'offline')).size}`)
            .addField("Name of System Channel", `${guild.systemChannel}`)
            .addField("Name of Default Role", `${guild.defaultRole}`)    
            .addField("Roles in Guild", `${roles}`)      
            .setFooter(`Requested by ${msg.author.username}`)

        msg.delete()
        msg.channel.send(embed);

        return;
    }   
    
    if(msg.content.startsWith(`${prefix}roleinfo`)) {
        let role = msg.mentions.roles.first()
        let rmembers = role.members.map(z => z)
        let embed = new Discord.RichEmbed()
            .setTitle(`${role.name}'s Information`)
            .setColor("#985986")  
            .addField("Role Name", `${role.name}`) 
            .addField("Role Created on",`${role.createdAt}`)
            .addField("Is role managed", `${role.managed}`)
            .addField("Members with Role", `${rmembers}`)      
            .addField("Position of Role", `${role.position}`)
            .addField("Is Role mentionable?", `${role.mentionable}`)            
            .addField("Is Role hoisted?", `${role.hoist}`) 
            .addField("Number of members in role", `${role.members.size}`)
            .setFooter(`Requested by ${msg.author.username}`)

        msg.delete()
        msg.channel.send(embed);

        return;
    }   

    //Sends a DM to mentioned User (This makes tracking down mentions easier and keeps things organized).
    if(msg.isMentioned(member) === true){ 
        const mentioned = msg.mentions.members.first()
        let embed = new Discord.RichEmbed()
            .setTitle(`A Member mentioned you in ${msg.guild}`)
            .setDescription(`You received this because you were mentioned in ${msg.guild}, below is further details of the mention`)
            .setColor("#985986")  
            .setThumbnail(msg.author.avatarURL)
            .addField("Message", `${msg.content}`)
            .setFooter(`You were mentioned by ${msg.author.username}`)

        let embedr = new Discord.RichEmbed()
            .setTitle(`You mentioned a member in ${msg.guild}`)
            .setDescription("This is your copy of the mention sent to the user you mentioned")
            .setColor("#985986")  
            .setThumbnail(msg.author.avatarURL)
            .addField("Message", `${msg.content}`)
            .setFooter(`You mentioned ${mentioned.nickname}`)

        mentioned.send(embed)
        msg.author.send(embedr)
    }

    //Sets System channel
    if(msg.content.startsWith(`${prefix}setsystem`)) {
        let channel = msg.mentions.channels.first()
        msg.guild.setSystemChannel(channel)
        msg.channel.send(`system channel set to ${channel}`)
    }
})


client.login(settings.token);
