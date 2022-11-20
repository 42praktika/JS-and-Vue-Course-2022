import {BUTTONS, MODALS, MODALS_TYPES} from "../const";
import state from "../state";
import {closeModal, findOpenedModalIndex} from "../helpers";

export const renderButtons = () => {
    const buttonsContainer = document.querySelector('.buttons-container');

    BUTTONS.forEach((item) => {
        const button = document.createElement('button');

        button.className = 'modal-button';
        button.textContent = item.text;
        button.dataset.type = item.type;

        button.addEventListener('click', (event) => {
            state.openedModal = item.type;
            event.stopPropagation();
        });

        buttonsContainer.append(button);
    })
};

export const renderModalWindows = () => {
    const app = document.querySelector('.app');

    MODALS.forEach((item) => {

        const controlButtons = document.createElement('div');
        const prevButton = document.createElement('a');
        const nextButton = document.createElement('a');
        const closeButton = document.createElement('a');

        const modalWindow = document.createElement('div');

        controlButtons.className = 'control-buttons';

        modalWindow.className = 'modal-window';
        modalWindow.dataset.type = item.type;

        prevButton.className = 'prev';
        prevButton.href = '#';
        prevButton.textContent = 'Previous';

        nextButton.className = 'next';
        nextButton.href = '#';
        nextButton.textContent = 'Next';

        closeButton.className = 'close';
        closeButton.href = '#';
        closeButton.textContent = 'Close';

        closeButton.addEventListener('click', (event) => {
            closeModal();
            event.stopPropagation();
        });

        prevButton.addEventListener('click', (event) => {
            const currentOpenedModalIndex = findOpenedModalIndex();

            if (currentOpenedModalIndex === 0) {
                state.openedModal = MODALS[MODALS.length - 1].type;
            } else {
                state.openedModal = MODALS[currentOpenedModalIndex - 1].type;
            }
            event.stopPropagation();
        });

        nextButton.addEventListener('click', (event) => {
            const currentOpenedModalIndex = findOpenedModalIndex();

            if (currentOpenedModalIndex === MODALS.length - 1) {
                state.openedModal = MODALS[0].type;
            } else {
                state.openedModal = MODALS[currentOpenedModalIndex + 1].type;
            }
            event.stopPropagation();
        });

        // switch (item.type) {
        //     case MODALS_TYPES.CATS:
        //         const img = document.createElement('img');
        //         img.alt = 'Cat';
        //         img.src = '../../img/cat_default.jpg';
        //         modalWindow.append(img);
        // }

        controlButtons.append(prevButton);
        controlButtons.append(closeButton);
        controlButtons.append(nextButton);

        modalWindow.append(controlButtons)

        app.append(modalWindow);
    });
}
