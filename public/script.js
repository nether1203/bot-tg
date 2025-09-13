

const tg = window.Telegram.WebApp;
tg.expand();

function sendOrder(item){
    tg.sendData(JSON.stringify({item}))
    
}

const btn = document.querySelector('.vibrateBtn');

if(Telegram.WebApp.HapticFeedback){
    alert('ffff')
    btn.addEventListener('click', () =>{
        Telegram.WebApp.HapticFeedback.impactOccurred('heavy');

        Telegram.WebApp.showAlert('Віюрація виконана');
    } )
}else{
    console.log('Ваш браузер не підтримує вібрацію');
    
}

