exports.run = (client, message, params) => {
    
    if (!params[0]) {
        let member = message.author;
        message.channel.send({embed: {
            color: 3447003,

            author: {
                name: member.username,
                icon_url: member.avatarURL
            },

            fields: [
            
            {
                name: "Username",
                value: (member.username)+"#"+(member.discriminator)
            },
            {
                name: "ID",
                value: (member.id)
            },
            {
                name: "Bot",
                value: (member.bot)
            },
            {
                name: "Account Creation",
                value: (member.createdAt)
            }
            ],
            
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: "Cryomage © Aria Fong"
            }
        }});
        message.delete(1,1);
    }

    else {
        let member = message.mentions.users.first();
        message.channel.send({embed: {
            color: 3447003,

            author: {
                name: member.username,
                icon_url: member.avatarURL
            },

            fields: [
            
            {
                name: "Username",
                value: (member.username)+"#"+(member.discriminator)
            },
            {
                name: "ID",
                value: (member.id)
            },
            {
                name: "Bot",
                value: (member.bot)
            },
            {
                name: "Account Creation",
                value: (member.createdAt)
            }
            ],
            
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: "Cryomage © Aria Fong"
            }
        }});
        message.delete(1,1);        
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'profile',
  description: 'Displays profile information',
  usage: 'profile @user'
};