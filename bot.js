const discord = require("discord.js");
const client = new discord.Client();

client.on("message", function(message){
    if(message.author.id === client.user.id) return;
    switch (message.content) {
        case 'Привет':
            return  message.reply('Привет');
        case 'Как дела':
            return  message.reply('Хорошо');
        default:
            message.reply('Хорошо');
    }
});

client.login("ODA3MDA3ODY0NDY3MzU3NzQ5.YBxupA.bczFutaHXoQxeYlULMixkZ7qk90")
.then(()=> console.log("online"))
.catch(()=> console.log("login failed"));