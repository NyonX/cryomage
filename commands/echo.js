exports.run = (client, message, args, params) => {

    if (args!=0) {
        message.channel.send(message.content.split(/\s+/g).slice(1).join(" "));
        message.delete(1,1);
    }

    else {
        message.channel.send('***ECHOOOOOO***');
        message.delete(1,1);
    }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'echo',
  description: 'Repeats your message',
  usage: 'echo <message>'
};