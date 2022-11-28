import {buttons, modalWindows, modals} from "./js/consts.js";
import state from './js/state.js';
import './js/watchers/watcher.js';
import { yesOrNow } from "./js/yes-or-no.js";
import { genshinRegions } from "./js/genshin-regions.js";
import { kanyeQuotes } from "./js/kanye-quotes.js";

const renderButtons = () => {
    const buttonsContainer = document.getElementById('buttons');

    modals.forEach(element => {
        const button = document.createElement('button');
        button.textContent = element.text;
        button.dataset.type = element.type;

        button.addEventListener('click', (event) => {
            state.openedModalType = element.type;
        })

        buttonsContainer.append(button);
    })
};

const closeModal = () => {
    state.openedModalType = modalWindows.none;
}

const renderModals = () => {
    const app = document.querySelector('.placeholder');

    modals.forEach((window) => {
        const modal = document.createElement('div');
        const prevButton = document.createElement('button');
        const nextButton = document.createElement('button');
        const closeButton = document.createElement('button');

        const content = document.createElement('div');
        content.classList = 'modal-content';

        prevButton.textContent = '<';
        prevButton.addEventListener('click', (event) => {
            const currentOpenedModalIndex = modals
                .findIndex((window) => window.type === state.openedModalType);

            if(currentOpenedModalIndex === 0){
                state.openedModalType = modals[modals.length - 1].type;
            }
            else{
                state.openedModalType = modals[currentOpenedModalIndex - 1].type;
            }
            event.stopPropagation();
        })

        nextButton.textContent = '>';
        nextButton.addEventListener('click', (event) => {
            const currentOpenedModalIndex = modals
                .findIndex((window) => window.type === state.openedModalType);

            if (currentOpenedModalIndex === modals.length - 1) {
                state.openedModalType = modals[0].type;
            } else {
                state.openedModalType = modals[currentOpenedModalIndex + 1].type;
            }

            event.stopPropagation();
        });

        closeButton.textContent = 'X';
        closeButton.addEventListener('click', (event) => {
            closeModal();

            event.stopPropagation();
        });

        modal.dataset.type = window.type;
        modal.classList.add('modal');
        modal.append(prevButton);
        modal.append(closeButton);
        modal.append(nextButton);
        modal.append(content);

        app.append(modal);
    });
}



renderButtons();
renderModals();
yesOrNow();
genshinRegions();
kanyeQuotes();