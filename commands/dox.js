exports.run = (client, message, params) => {
    message.channel.send('Please state information for doxxing');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'dox',
  description: 'Attempts to dox someone',
  usage: 'dox [SNS] [data]'
};