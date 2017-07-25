module.exports = (client, member) => {

    if (member.bot) return;
    client.log("log", `${member.guild.name}: ${member.user.username} (${member.user.id}) joined`, "EVT");
    member.guild.defaultChannel.send(`Hello <@!`+member.user.id+`>, and welcome to **`+member.guild.name+`**!
Be sure to read the server rules, and enjoy your stay.`);

};