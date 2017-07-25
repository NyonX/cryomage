exports.run = (client, message, params) => {

    if (!params[0]) {
        message.reply('which member would you like to ban?');
        message.delete(1,1);
    }

    else {
        let member = message.mentions.members.first();
        let user = message.mentions.users.first();
        let reason = message.content.split(/\s+/g).slice(2).join(" ");
            member.createDM()
            .then(channel => {
            channel.send("You have been **banned** for ***"+reason+"***")
            });
        message.channel.send(user+' also known as **'+user.username+'** with user ID **'+user.id+'**  has been **banned**');
        member.ban(reason);
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
  name: 'ban',
  description: 'Bans a user',
  usage: 'ban @user'
};