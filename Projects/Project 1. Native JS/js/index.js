import {MODAL_WINDOWS} from '@/consts.js';
import {navigationButtonsTypes} from '@/consts.js'
import {watchAppState} from './watchers.js';


const startApp = () => {
    const appState = {
        openedModalIndex: -1,
    }

    // Обработчик на кнопки открытия окон
    const modalsKeys = Object.keys(MODAL_WINDOWS);
    const buttonsContainer = document.querySelector('div.buttons');

    buttonsContainer.addEventListener('click', (event) => {
        appState.openedModalIndex = modalsKeys.indexOf(event.target.dataset.type);
    })

    // Обработчик на кнопки навигации
    const navigationButtons = document.querySelectorAll('.navigation__element');

    navigationButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            switch (event.target.dataset.type) {
                case navigationButtonsTypes.close:
                    appState.openedModalIndex = -1;
                    break;
                case navigationButtonsTypes.next:
                    appState.openedModalIndex = (appState.openedModalIndex + 1 === modalsKeys.length) ? 0 : appState.openedModalIndex + 1;
                    break;
                case navigationButtonsTypes.back:
                    appState.openedModalIndex = (appState.openedModalIndex === 0) ? modalsKeys.length - 1 : appState.openedModalIndex - 1;
                    break;
            }
        });
    });


    watchAppState(appState);
};

startApp();