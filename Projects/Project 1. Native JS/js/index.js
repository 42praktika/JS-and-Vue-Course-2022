import MODAL_WINDOWS from '@/consts.js';
import {watchAppState} from './watchers.js';


const startApp = () => {
    const appState = {
        openedModalName: '',
        previousModalName: 'modal-1',
    }

    // Обработчик на кнопки открытия окон

    const modalsKeys = Object.keys(MODAL_WINDOWS);
    const buttonsContainer = document.querySelector('div.buttons');

    buttonsContainer.addEventListener('click', (event) => {
        if (modalsKeys.indexOf(event.target.dataset.type) !== -1) {
            appState.openedModalName = event.target.dataset.type;
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
                    appState.openedModalName = '';
                    break;
                case 'next':
                    appState.openedModalName = (currentModalIndex + 1 === modalsKeys.length) ? modalsKeys[0] : modalsKeys[currentModalIndex + 1];
                    break;
                case 'back':
                    appState.openedModalName = (currentModalIndex === 0) ? modalsKeys[modalsKeys.length - 1] : modalsKeys[currentModalIndex - 1];
                    break;
            }
        });
    });


    watchAppState(appState);
}

startApp();