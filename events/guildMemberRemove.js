module.exports = (client, member) => {

    if (member.bot) return;
    client.log("log", `${member.guild.name}: ${member.user.username} (${member.user.id}) left`, "EVT");
    member.guild.defaultChannel.send(`Unfortunately, **`+member.user.username+`** died in **`+member.guild.name+`**...
Let us pay our respects by reacting **F**.`);
};