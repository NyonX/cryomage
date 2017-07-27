exports.run = (client, message) => {
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    fields: [{
        name: "About",
        value: "Cryomage is a Discord moderation and talk bot developed by Aria Fong. It runs on node.JS with the Discord.JS library." 
    },
    {
        name: "Website",
        value: "Under construction"
    },
    {
        name: "Donate and Support",
        value: "[Kofi](https://ko-fi.com/ariafong) | [Patreon](https://www.patreon.com/aria_nimue) | [GitHub](https://github.com/fengxiaoyue/cryomage)"
    },
    {
        name: "Version",
        value: "2.8.0"
    }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Aria Fong"
    }
    }});
    message.delete(1,1);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'info',
  description: 'Displays information about the bot',
  usage: 'info'
};