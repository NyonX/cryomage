module.exports = async client => {
  await wait(1000);
  
  client.log("log", `Serving ${client.users.size} users in ${client.channels.size} channels of ${client.guilds.size} servers.`, "Online");
  client.user.setStatus('Online');
  client.user.setGame('with ice magic');
  
};