import { MODAL_WINDOWS, navigationButtonsTypes } from './consts';

import {
    watchAppState, watchCatsState, watchCharactersState, watchSunriseState,
} from './watchers';
import {
    appState, catsModalState, charactersModalState, sunriseState,
} from './state';
import addCatsListeners from './ModalCats';
import addRickAndMortyListeners from './ModalRickAndMorty';
import addSunriseListeners from './ModalSunrise';

const startApp = () => {
    // Обработчик на кнопки открытия окон
    const modalsKeys = Object.keys(MODAL_WINDOWS);
    const buttonsContainer = document.querySelector('div.buttons');

    buttonsContainer.addEventListener('click', (event) => {
        appState.openedModalIndex = modalsKeys.indexOf(event.target.dataset.type);
    });

    // Обработчик на кнопки навигации
    const navigationButtons = document.querySelectorAll('.navigation__element');

    navigationButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            // eslint-disable-next-line default-case
            switch (event.target.dataset.type) {
            case navigationButtonsTypes.close:
                appState.openedModalIndex = -1;
                break;
            case navigationButtonsTypes.next:
                appState.openedModalIndex = (appState.openedModalIndex + 1 === modalsKeys.length)
                    ? 0 : appState.openedModalIndex + 1;
                break;
            case navigationButtonsTypes.back:
                appState.openedModalIndex = (appState.openedModalIndex === 0)
                    ? modalsKeys.length - 1 : appState.openedModalIndex - 1;
                break;
            }
        });
    });

    addSunriseListeners();
    addRickAndMortyListeners();
    addCatsListeners();

    watchAppState(appState);
    watchCharactersState(charactersModalState);
    watchCatsState(catsModalState);
    watchSunriseState(sunriseState);
};

startApp();
