const Discord = require(`discord.js`);
const bot = new Discord.Client();

const token = `NzQyMDQ5NDE5Nzk2NTQ1NjA2.XzAdYA.kEEhng0hTpaQ-UvQyAnO0-Lpva0`;

bot.on(`ready`, () =>{
    console.log(`Botten er nu klar!`);
})

bot.on(`message`, msg=>{
    if(msg.content === "Hej!"){
        msg.reply(`HEJ VEN!`);
    }
})

bot.login(token);