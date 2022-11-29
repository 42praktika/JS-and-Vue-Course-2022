import './index.css';
import { BUTTONS, MODALS, MODALS_TYPES } from "./js/const";
import state from "./js/state";
import './js/watchers';
import { getFact } from "./js/api/firstAPI";
import { getWhatToDo } from "./js/api/secondAPI";
import { getImage } from "./js/api/thirdAPI";

const closeModal = () => {
    state.openedModalType = MODALS_TYPES.NONE;
}

const renderButtons = () => {
    const buttonsContainer = document.querySelector('.buttons-container');

    BUTTONS.forEach((item) => {
        const button = document.createElement('button');

        button.classList.add('mainButtons');
        button.textContent = item.text;
        button.dataset.type = item.type;

        button.addEventListener('click', (event) => {
            state.openedModalType = item.type;

            renderAPI();

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

            renderAPI()

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

            renderAPI()

            event.stopPropagation();
        });

        closeButton.textContent = 'Закрыть';
        closeButton.addEventListener('click', (event) => {
            closeModal();

            hideAPI();

            event.stopPropagation();
        });

        modal.dataset.type = item.type;
        modal.classList.add('modal');

        modal.append(prevButton);
        modal.append(nextButton);
        modal.append(closeButton);

        prevButton.classList.add('buttonModal');
        nextButton.classList.add('buttonModal');
        closeButton.classList.add('buttonModal');

        app.append(modal);
    });
};

const hideAPI = () => {
    const allAPI = document.querySelectorAll('.window');
    allAPI.forEach((item) => {
        item.classList.add('apiNone');

        if (item.classList.contains('apiActive')) {
            item.classList.remove('apiActive');
        }
    });
};

const renderAPI = () => {
    hideAPI();

    if (state.openedModalType === MODALS_TYPES.FIRST) {
        getFact();
    } else if (state.openedModalType === MODALS_TYPES.SECOND) {
        getWhatToDo();
    } else if (state.openedModalType === MODALS_TYPES.THIRD) {
        getImage();
    }
};


renderButtons();
renderModals();