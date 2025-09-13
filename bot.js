require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const bodyParser = require('body-parser')

const token = process.env.TG_BOT;
const bot = new TelegramBot(token,{polling: true});

const app = express();
app.use(express.static('public'))
app.use(bodyParser.json());

bot.onText(/\/start/, (msg) =>{
    bot.sendMessage(msg.chat.id, 'Відкритий WebApp', {
        reply_markup:{
            keyboard:[
                [
                    {
                        text:'Відкрийте магазин',
                        web_app: {
                            url: 'https://tnc0m2h6-3000.euw.devtunnels.ms/'
                        },
                    },
                ],
            ],
            remove_keyboard:true
        }
    })

   
})

 bot.on('message', (msg) =>{
        if(msg.web_app_data){
            console.log(msg.web_app_data);
            const data = JSON.parse(msg.web_app_data.data)
            console.log('Отриманно дані з WabApp дані',data);
            bot.sendMessage(msg.chat.id, 'Ти замовляв:' + data.item);
            
        }
    })
    app.listen(3000, () => {
        console.log(('Server is running on http://localhost:3000'));
        
    })

