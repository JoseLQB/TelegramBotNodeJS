const {Telegraf} = require('telegraf');

const bot = new Telegraf('1622090153:AAE_6qEsPdE3iN-gbTjjfxd2cMa_iUnyiNQ');

bot.start((ctx)=>{
    ctx.reply('TDS PTS');
});

bot.launch();