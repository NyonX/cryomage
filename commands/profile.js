exports.run = (client, message, params,args) => {
    
    if (!params[0]) {
        let user = message.author;
        let member = message.member;
        message.channel.send({embed: {
            color: 3447003,

            author: {
                name: user.username,
                icon_url: user.avatarURL
            },

            fields: [
            
            {
                name: "Username",
                value: user.username+"#"+user.discriminator
            },
            {
                name: "ID",
                value: user.id
            },
            {
                name: "Class",
                value: member.highestRole.name
            },                             
            {
                name: "Birth",
                value: user.createdAt
            },
            {
                name: "Service",
                value: member.joinedAt
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
        let user = message.mentions.users.first();
        let member = message.mentions.members.first();
        message.channel.send({embed: {
            color: 3447003,

            author: {
                name: user.username,
                icon_url: user.avatarURL
            },

            fields: [
            
            {
                name: "Username",
                value: user.username+"#"+user.discriminator
            },
            {
                name: "ID",
                value: user.id
            },
            {
                name: "Class",
                value: member.highestRole.name
            },                             
            {
                name: "Birth",
                value: user.createdAt
            },
            {
                name: "Service",
                value: member.joinedAt
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