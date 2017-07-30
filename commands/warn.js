exports.run = (client, message, params) => {

    if (!params[0]) {
        message.reply('which member would you like to warn?');
        message.delete(1,1);
    }

    else {
        let member = message.mentions.members.first();
        let user = message.mentions.users.first();
        let reason = message.content.split(/\s+/g).slice(2).join(" ");
        if (user.id!='261065932774965248'&&!user.bot) {
            member.createDM()
                .then(channel => {
                channel.send("You have been **warned** for ***"+reason+"***")
                });
            message.channel.send('**'+user.username+'** has been **warned** for ***'+reason+'***');
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
  name: 'warn',
  description: 'Warns a user',
  usage: 'warn @user'
};