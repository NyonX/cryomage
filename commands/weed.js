exports.run = (client, message, params) => {

    if (!params[0]) {
    message.reply('please do not forget to eat seaweed');
    }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'weed',
  description: 'Reminds you to eat seaweed',
  usage: 'weed'
};