module.exports = (client, message) => {

  if(message.author.bot) return;

  //ping
    if(message.content.toLowerCase().startsWith('cryo')) {
        client.log("log", `${message.guild.name}/#${message.channel.name}: ${message.author.username} (${message.author.id}) triggered ping`, "TGR");

        if(message.author.id=='261065932774965248') {
            message.reply('yes my courtship? What can I do for you?');
        }

        else if(message.author.id=='249883381330870272') {
            message.reply('greetings my lordship. How may I serve you today?');
        }

        else {
            message.reply('hm?');
        }

    } 

  //same
    if (message.content.toLowerCase().startsWith('same')
    &&message.content.toLowerCase().endsWith('same')) {
        client.log("log", `${message.guild.name}/#${message.channel.name}: ${message.author.username} (${message.author.id}) triggered same`, "TGR");
        message.channel.send('same');    
    }  

  //lmao
    if (message.content.toLowerCase().startsWith('ayy')
    &&!message.content.toLowerCase().includes('lmao')) {
        client.log("log", `${message.guild.name}/#${message.channel.name}: ${message.author.username} (${message.author.id}) triggered lmao`, "TGR");
        message.channel.send('lmao');   
    }

  if(message.content.indexOf(client.config.prefix) !== 0) return;

  const args = message.content.split(/\s+/g);
  const command = args.shift().slice(client.config.prefix.length).toLowerCase();

  let perms = client.permlevel(message);
  const cmd = client.commands.get(command)
  || client.commands.get(client.aliases.get(command));

  if (cmd && perms >= cmd.conf.permLevel) {
    client.log("log", `${message.guild.name}/#${message.channel.name}: ${message.author.username} (${message.author.id}) ran command ${cmd.help.name}`, "CMD");
    cmd.run(client, message, args, perms);
  }
};