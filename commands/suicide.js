exports.run = (client, message, params) => {

    if (!params[0]) {
      message.channel.send('***'+message.author.username+' has committed suicide***');
      message.member.kick();
    }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'suicide',
  description: 'Kills yourself',
  usage: 'suicide'
};