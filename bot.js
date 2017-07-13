const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'insert token here';


client.on('message', message => {

  //ping
  if ((message.author.id!='261065932774965248'
  &&message.author.id!='249883381330870272')
  &&(message.content.startsWith('Cryo')
  ||message.content.endsWith('Cryo'))) {
    console.log('Pinged');
    message.reply('yes?');
  }

  //owner ping
  if (message.author.id=='261065932774965248'
  &&message.content.startsWith('Cryo')) {
    console.log('Master Pinged');
    message.reply('my Lady?');
  }
  if (message.author.id=='249883381330870272'
  &&message.content.startsWith('Cryo')) {
    console.log('Master Pinged');
    message.reply('my Lord?');
    message.channel.send('A-kun has arrived.');
  }
  
  //other pings
  if ((message.content.startsWith('Ayy')
  ||message.content.startsWith('ayy'))
  &&!message.content.includes('lmao')) {
    console.log('Ayy lmao');
    message.channel.send('lmao');
  }

  if ((message.content.startsWith('same')
  ||message.content.startsWith('Same'))
  &&message.author.id!='329948439335141377'
  &&(message.content.endsWith('same')
  ||message.content.endsWith('Same'))) {
    console.log('same');
    message.channel.send('same');
  }

  //commands
  //c.profile User Profile Details
  if (message.content.startsWith('c.profile')
  &&message.content.endsWith('c.profile')) {
    console.log('Sending profile details');
    let member = message.author;
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: member.username,
      icon_url: member.avatarURL
    },
      fields: [{
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
    }
    });
    message.delete(1,1);
  }

  //c.profile when mentioned User Profile Details
  if (message.content.startsWith('c.profile')
  &&!message.content.endsWith('c.profile')) {
    console.log('Sending profile details');
    let member = message.mentions.users.first();
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: member.username,
      icon_url: member.avatarURL
    },
      fields: [{
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
    }
    });
    message.delete(1,1);
  }

  //c.help Displays all commands
  if (message.content.startsWith('c.help')
  &&message.content.endsWith('c.help')) {
    console.log('Sending command details');
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    fields: [{
        name: "About",
        value: "Cryomage is a Discord.JS moderation and talk bot developed by Aria Fong." 
    },
    {
        name: "Commands",
        value: `Command Preffix is ***c.***

        **c.help** - gives available commands
        **c.profile** - gives profile info
        **c.warn** - warns a user
        **c.kick** - kicks a user
        **c.ban** - bans a user`
    },
    {
        name: "Website",
        value: "Under construction"
    },
    {
        name: "Version",
        value: "1.0.0"
    }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Aria Fong"
    }
  }});
  }

//auto-mod features
  if (message.content.includes('bully')) {
    console.log('Bully');
    message.channel.send('Bad!');
  }
  //banned words
  if (message.content.includes('sex')
  ||message.content.includes('cum')) {
    console.log('NSFW');
    message.delete(1,1);
  }

//mod-only commands

  //warn users
  if (message.content.startsWith('c.warn')
  &&!message.content.endsWith('c.warn')) {
    let member = message.mentions.members.first();
    let reason = message.content.split(/\s+/g).slice(2).join(" ");
    member.createDM()
      .then(channel => {
       channel.send("You have been warned for "+reason);
      });
    message.channel.send(member+' has been warned.');
    console.log('Warned '+member);
    message.delete(1,1);
  }

  //error message
  if (message.content.startsWith('c.warn')
  &&message.content.endsWith('c.warn')) {
    message.reply('which member would you like to warn?');
    message.delete(1,1);
  }
  
  //kick users
  if (message.content.startsWith('c.kick')
  &&!message.content.endsWith('c.kick')) {
    let member = message.mentions.members.first();
    let reason = message.content.split(/\s+/g).slice(2).join(" ");
    member.createDM()
      .then(channel => {
       channel.send("You were kicked for "+reason);
      });
    message.channel.send(member+' has been kicked.')
    member.kick(reason);
    console.log('Kicked '+member);
    message.delete(1,1);
  }

  //error message
  if (message.content.startsWith('c.kick')
  &&message.content.endsWith('c.kick')) {
    message.reply('which member would you like to kick?');
    message.delete(1,1);
  }

  //ban users
  if (message.content.startsWith('c.ban')
  &&!message.content.endsWith('c.ban')) {
    let member = message.mentions.members.first();
    let reason = message.content.split(/\s+/g).slice(2).join(" ");
    member.createDM()
      .then(channel => {
       channel.send("You were banned for "+reason);
      });
    message.channel.send(member+' has been banned.')
    member.ban(reason); 
    console.log('Banned '+member);
    message.delete(1,1);
  }

  //error message
  if (message.content.startsWith('c.ban')
  &&message.content.endsWith('c.ban')) {
    message.reply('which member would you like to ban?');
    message.delete(1,1);
  }

//
  });

//client on
client.on('ready', () => {
  console.log('Online');
  var chamber = client.channels.get('326407903034736642');
  chamber.send("I am alive.");
  client.user.setStatus('online');
  client.user.setGame('with your soul');
});

client.login(token);
