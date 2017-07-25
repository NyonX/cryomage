module.exports = (client, member) => {

    if (member.bot) return;
    client.log("log", `${member.guild.name}: ${member.user.username} (${member.user.id}) left`, "EVT");
    member.guild.defaultChannel.send('Unfortunately, **'+member.user.username+'** left **'+member.guild.name+'**...');
    member.guild.defaultChannel.send('Send **F** to pay your respects.')
    
};