import {BUTTONS, MODALS, MODALS_TYPES} from "../const";
import '../watchers';
import state from "../state";

export const renderButtons = () => {
    const buttonsContainer = document.querySelector('.buttons-container');

    BUTTONS.forEach((item) => {
        const button = document.createElement('button');
        button.classList.add('button');
        button.textContent = item.text;
        button.dataset.type = item.type;

        button.addEventListener('click', (event) => {
            state.openedModalType = item.type;
            event.stopPropagation();
        })
        buttonsContainer.append(button);
    })
}

export const renderModals = () => {
    const app = document.querySelector('.app');
    MODALS.forEach((item) => {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.dataset.type = item.type;

        const modalBody = document.createElement('div');
        modalBody.classList.add('modal__body');

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal__content');

        modal.append(modalBody);
        modalBody.append(modalContent);

        const modalTittle = document.createElement('div');
        modalTittle.classList.add('modal__title')
        modalTittle.innerHTML = item.text;

        const modalNextElement = document.createElement('a');
        modalNextElement.classList.add('modal__next');
        modalNextElement.href = "";
        modalNextElement.innerHTML = "&#9755";

        modalNextElement.addEventListener('click', (event) => {
            event.preventDefault();
            const currentOpenedModalIndex = MODALS
                .findIndex((item) => item.type === state.openedModalType);

            if (currentOpenedModalIndex === MODALS.length - 1) {
                state.openedModalType = MODALS[0].type;
            } else {
                state.openedModalType = MODALS[currentOpenedModalIndex + 1].type;
            }

            event.stopPropagation();
        });

        const modalPrevElement = document.createElement('a');
        modalPrevElement.classList.add('modal__prev');
        modalPrevElement.href = "";
        modalPrevElement.innerHTML = "&#9754";

        modalPrevElement.addEventListener('click', (event) => {
            event.preventDefault();
            const currentOpenedModalIndex = MODALS
                .findIndex((item) => item.type === state.openedModalType);

            if (currentOpenedModalIndex === 0) {
                state.openedModalType = MODALS[MODALS.length - 1].type;
            } else {
                state.openedModalType = MODALS[currentOpenedModalIndex - 1].type;
            }

            event.stopPropagation();
        });

        const modalCloseElement = document.createElement('a');
        modalCloseElement.classList.add('modal__close');
        modalCloseElement.href = "";
        modalCloseElement.innerHTML = "&#10060";

        modalCloseElement.addEventListener('click', (event) => {
            event.preventDefault();
            closeModal();
        });

        modalContent.append(modalTittle, modalNextElement, modalPrevElement, modalCloseElement);

        app.append(modal);
    })
}

const closeModal = () => {
    state.openedModalType = MODALS_TYPES.NONE;
}

document.addEventListener('click', (event) => {
    const allModals = document.querySelectorAll('.modal__body');
    allModals.forEach((item) => {
        if (event.target === item) {
            closeModal();
        }
    })
});




