import './styles/index.css';
import { BUTTONS, MODALS, MODALS_TYPES } from "./js/const";
import state from "./js/state";
import './js/watchers';

const closeModal = () => {
    state.openedModalType = MODALS_TYPES.NONE;
}

const renderButtons = () => {
    const buttonsContainer = document.querySelector('.buttons-container');

    BUTTONS.forEach((item) => {
        const button = document.createElement('button');

        button.textContent = item.text;
        button.dataset.type = item.type;

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