import startModal1 from './Modal1.js'
import startModal2 from './Modal2.js'
import startModal3 from './Modal3.js' // В файлах Modal... будет логика самих модальных окон
import watchAppState from './watchers.js';

const MODAL_WINDOWS = {
    'modal-1': {
        title: 'Модальное окно 1',
        domElement: document.querySelector('.modal-1'),
        function: startModal1
    },
    'modal-2': {
        title: 'Модальное окно 2',
        domElement: document.querySelector('.modal-2'),
        function: startModal2
    },
    'modal-3': {
        title: 'Модальное окно 3',
        domElement: document.querySelector('.modal-3'),
        function: startModal3
    }
}

const startApp = () => {
    const appState = {
        isModalsOpen: false,
        openedModalName: '',
        previousModalName: 'modal-1',
    }

    // Обработчик на кнопки открытия окон

    const modalsKeys = Object.keys(MODAL_WINDOWS);
    const buttonsContainer = document.querySelector('div.buttons');

    buttonsContainer.addEventListener('click', (event) => {
        if (modalsKeys.indexOf(event.target.dataset.type) !== -1) {
            appState.openedModalName = event.target.dataset.type;
            appState.isModalsOpen = true;
        }
    })

    // Обработчик на кнопки навигации

    const navigationButtons = document.querySelectorAll('.navigation__element');
    navigationButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            let currentModalIndex = modalsKeys.indexOf(appState.openedModalName);
            appState.previousModalName = appState.openedModalName;
            switch (event.target.dataset.type) {
                case 'close':
                    appState.isModalsOpen = false;
                    appState.openedModalName = '';
                    break;
                case 'next':
                    if (currentModalIndex + 1 === modalsKeys.length) {
                        appState.openedModalName = modalsKeys[0];
                    } else {
                        appState.openedModalName = modalsKeys[currentModalIndex + 1];
                    }
                    break;
                case 'back':
                    if (currentModalIndex === 0) {
                        appState.openedModalName = modalsKeys[modalsKeys.length - 1];
                    } else {
                        appState.openedModalName = modalsKeys[currentModalIndex - 1];
                    }
                    break;
            }
        });
    });


    watchAppState(appState);
}

startApp();

export default MODAL_WINDOWS;