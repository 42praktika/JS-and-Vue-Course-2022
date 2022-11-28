import watchState from './watcher.js';

const buttons = document.querySelector('.buttons');

const modalWindows = {                  //состояние
    currentIndex: 0,
    action: '',
    prevIndex: 0,
    list: [buttons, ...document.querySelectorAll('.modal')]
}

const currentToPrevIndex = () => {         //чтобы не повторяться, присваивание текущего предыдущему индексу
    modalWindows.prevIndex = modalWindows.currentIndex;
}

buttons.addEventListener('click', event => {        //кнопки в главном модуле
    modalWindows.prevIndex = 0;
    modalWindows.currentIndex = [...buttons.children].indexOf(event.target) + 1;
})

const prevButtons = document.querySelectorAll('.button-prev');    //все кнопки возврата
prevButtons.forEach(element => element.addEventListener('click', event => {
    currentToPrevIndex();
    modalWindows.currentIndex = ((modalWindows.prevIndex) - 4) % 3 + 3;
}))

const nextButtons = document.querySelectorAll('.button-next');      //все кнопки следующего
nextButtons.forEach(element => element.addEventListener('click', event => {
    currentToPrevIndex();
    modalWindows.currentIndex = (modalWindows.prevIndex) % 3 + 1;
}))

const closeButtons = document.querySelectorAll('.button-close');
closeButtons.forEach(element => element.addEventListener('click', event => {
    currentToPrevIndex();
    modalWindows.currentIndex = 0;
}))

const getButton = document.querySelector('.get-info');
getButton.addEventListener('click', event => {
    fetch('https://anime-facts-rest-api.herokuapp.com/api/v1', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
    })
        .then((response) => response.json())       // обработка результата запрос
        .catch((error) => {                     // обработка ошибок
            console.error(error);
        });

})

watchState(modalWindows);

