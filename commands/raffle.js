exports.run = (client, message, args, perms) => {

    if (args==0
    &&perms!=10) {

        message.member.addRole('336059734648160257');
        message.delete(1,1);
        message.channel.send('**'+message.author.username+' has entered the raffle**');

    }

    if (args==0
    &&perms==10) {

        message.channel.send('**A new raffle has began**');

    }

    else if (args!=0) {
        message.channel.send(`To join the raffle, type **c.raffle**
*Prizes for this raffle includes:*
        
-Nekopara vol. 0
-Nekopara vol. 1
-Hook`);
    }

    else return;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'raffle',
  description: 'Joins the current raffle',
  usage: 'raffle'
};