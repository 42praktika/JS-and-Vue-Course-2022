import { BUTTONS } from "./js/const/ButtonConst";
import { MODALS } from "./js/const/ModalConst";
import { MODAL_APIS } from "./js/const/ApiConst";
import ModalState from "./js/state/ModalState";
import './js/watchers/ModalWatcher';
import './index.css';
import { getCatAPI } from './js/api/CatApi';
import { getDayOffAPI } from "./js/api/DayOffApi";
import { getRickAndMortyAPI } from "./js/api/RickAndMortyApi";

const closeModal = () => {
    ModalState.openedModalApi = MODAL_APIS.NONE;
};

const renderButtons = () => {
    const buttonContainer = document.querySelector('.button__container');

    BUTTONS.forEach((elem) => {
        const button = document.createElement('button');

        button.classList.add('btn');
        button.textContent = elem.text;
        button.dataset.type = elem.api;

        button.addEventListener('click', (event) => {
            ModalState.openedModalApi = elem.api;

            renderAPI();

            event.stopPropagation();
        });

        buttonContainer.append(button);
    });
};

const renderModals = () => {
    const main = document.querySelector('.modal__container-in');

    MODALS.forEach((elem) => {
        const modal = document.createElement('div');

        const closeButton = document.createElement('button');
        const prevButton = document.createElement('button');
        const nextButton = document.createElement('button');

        nextButton.textContent = '>';
        nextButton.classList.add('modal-btn');
        prevButton.textContent = '<';
        prevButton.classList.add('modal-btn');
        closeButton.textContent = 'X';
        closeButton.classList.add('modal-btn');

        prevButton.addEventListener('click', (event) => {
            const currentOpenedModalIndex = MODALS
                .findIndex((elem) => elem.api === ModalState.openedModalApi);

            if (currentOpenedModalIndex === 0) {
                ModalState.openedModalApi = MODALS[MODALS.length - 1].api;
            } else {
                ModalState.openedModalApi = MODALS[currentOpenedModalIndex - 1].api;
            }

            renderAPI();

            event.stopPropagation();
        });

        nextButton.addEventListener('click', (event) => {
            const currentOpenedModalIndex = MODALS
                .findIndex((elem) => elem.api === ModalState.openedModalApi);

            if (currentOpenedModalIndex === MODALS.length - 1) {
                ModalState.openedModalApi = MODALS[0].api;
            } else {
                ModalState.openedModalApi = MODALS[currentOpenedModalIndex + 1].api;
            }

            renderAPI()

            event.stopPropagation();
        });

        closeButton.addEventListener('click', (event) => {
            closeModal();

            removeAPI()

            event.stopPropagation();
        });

        modal.textContent = elem.text;
        modal.dataset.type = elem.api;
        modal.classList.add('modal');

        modal.append(prevButton, closeButton, nextButton);

        main.append(modal);
    });

};

const removeAPI = () => {
    const modal__container = document.querySelector('.modal__container');
    const activeWindow = document.querySelector('.activeWindow');

    if (modal__container.childElementCount > 1) {
        modal__container.removeChild(activeWindow);
    }
};

const renderAPI = () => {
    removeAPI();

    if (ModalState.openedModalApi === MODAL_APIS.CAT_API) {
        getCatAPI();
    } else if (ModalState.openedModalApi === MODAL_APIS.DAY_OFF_API) {
        getDayOffAPI();
    } else if (ModalState.openedModalApi === MODAL_APIS.IQA_API) {
        getRickAndMortyAPI();
    }
};

renderButtons();
renderModals();