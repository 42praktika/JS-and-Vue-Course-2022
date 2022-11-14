import {BUTTONS,MODALS,MODALS_TYPES} from "./const.js";
import state from './state.js';
import './watchers.js'

const closeModal = () => {
    state.openedModalType = MODALS_TYPES.NONE;
}

const renderButtons = () => {
    const buttonsContainer = document.querySelector('.buttons');

    BUTTONS.forEach((item) => {
        const button = document.createElement('button');

        button.textContent = item.text;
        button.dataset.type = item.type;
        button.classList = 'btn';
        button.addEventListener('click', (event) => {
            state.openedModalType = item.type;

            event.stopPropagation();
        });

        buttonsContainer.append(button);
    })
};

const renderModals = () => {
    const app = document.querySelector('.app');

    MODALS.forEach((item) => {
        const modal = document.createElement('div');
        const prevButton = document.createElement('button');
        const nextButton = document.createElement('button');
        const closeButton = document.createElement('button');

        prevButton.textContent = 'Назад';
        prevButton.classList='prev'
        prevButton.addEventListener('click', (event) => {
            const currentOpenedModalIndex = MODALS
                .findIndex((item) => item.type === state.openedModalType);

            if (currentOpenedModalIndex === 0) {
                state.openedModalType = MODALS[MODALS.length - 1].type;
            } else {
                state.openedModalType = MODALS[currentOpenedModalIndex - 1].type;
            }

            event.stopPropagation();
        });

        nextButton.textContent = 'Вперед';
        nextButton.classList='next';
        nextButton.addEventListener('click', (event) => {
            const currentOpenedModalIndex = MODALS
                .findIndex((item) => item.type === state.openedModalType);

            if (currentOpenedModalIndex === MODALS.length - 1) {
                state.openedModalType = MODALS[0].type;
            } else {
                state.openedModalType = MODALS[currentOpenedModalIndex + 1].type;
            }

            event.stopPropagation();
        });

        closeButton.textContent = 'Закрыть';
        closeButton.classList = 'close'
        closeButton.addEventListener('click', (event) => {
            closeModal();

            event.stopPropagation();
        });

        modal.dataset.type = item.type;
        modal.classList.add('modal');
        modal.textContent = item.text;

        modal.append(prevButton);
        modal.append(nextButton);
        modal.append(closeButton);

        app.append(modal);
    });
};

document.addEventListener('click', closeModal);

renderButtons();
renderModals();