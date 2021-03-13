const {Telegraf} = require('telegraf');

const bot = new Telegraf('1622090153:AAE_6qEsPdE3iN-gbTjjfxd2cMa_iUnyiNQ');

bot.start((ctx)=>{
    ctx.reply(`/help para ayuda 
/settings para configuración
/saludo para saludar`);
});

bot.help((ctx)=>{
    ctx.reply('No tengo mucha ayuda que darte.');
});

bot.settings((ctx)=>{
    ctx.reply('Soy un bot muy sencillo, solo me hicieron para aprender. No necesitas saber mucha cosa.');
});

bot.command(['saludo', 'SALUDO', 'Saludo'], (ctx)=>{
    ctx.reply('¡¡Hola!!')
})

bot.hears(['tds', 'TDS'], (ctx)=>{
    ctx.reply("TDS PTS");
})

bot.on("text", (ctx)=>{
    ctx.reply("Has escrito, felicidades, sabes escribir");
})

bot.launch();