exports.run = (client, message, params) => {
    
    if (!params[0]) {
        message.reply('shall I curse thee?');
        message.delete(1,1);
    }

    else {
        let member = message.mentions.members.first();
        let user = message.mentions.users.first();
        if (user.id!='261065932774965248'&&!user.bot) {
            var role = '340452302748123137';
            member.addRole(role);
            message.channel.send('**'+user.username+'** has been **cursed**');
        }

        else {
            message.reply(user.username+' is **immune**!');
        }
        message.delete(1,1);
    }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'curse',
  description: 'Curses a user and places them on watchlist',
  usage: 'curse'
};