const Discord = require('discord.js');
const client = new Discord.client();

Client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong!');
    }
});

client.login(process.env.BOT_TOKEN);
