exports.run = (client, message, params, level) => {
  if (!params[0]) {
    const myCommands = client.commands.filter(c=>c.conf.permLevel <= level);
    const commandNames = myCommands.keyArray();
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    fields: [{
        name: "Command List",
        value: `Use ${client.config.prefix}help <command name> for details

${myCommands.map(c =>`**${/*client.config.prefix*/}${c.help.name}**${' '.repeat(longest - c.help.name.length)} - ${c.help.description}`).join('\n')}`
    }],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Aria Fong"
    }
    }});
    message.delete(1,1);    
  } 
  
  else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        fields: [{
          name: `Description of the command ${command.help.name}`,
          value: `${command.help.description}`
        },
        {
          name: `Usage`,
          value: `${command.help.usage}`
        }],
        timestamp: new Date(),
        footer: {
        icon_url: client.user.avatarURL,
        text: "© Aria Fong"
        }
      }});
      message.delete(1,1);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Displays all the available commands',
  usage: 'help [command]'
};
