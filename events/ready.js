const client = require("..");

client.on('ready', () => {
  console.log(`${client.user.username} Is Online`);
  client.user.setActivity(`Rissmun Coding me`,{type : "STREAMING", url : "https://twitch.com/rissmun"});
})
