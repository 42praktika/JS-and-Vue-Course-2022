import { BUTTONS as buttons, MODALS as modals } from './consts';
import { initRandomDog } from './init/initRandomDog';
import { initValorantWeapons } from './init/initValorantWeapons';
import { initCryptoCurrency } from './init/initCryptoCurrency';

const createButtons = () => {
    buttons.forEach((element) => {
        const button = document.createElement('button');
        button.textContent = element.title;
        button.dataset.type = element.type;
        button.className = 'button-widget';
        const buttonContainer = document.querySelector('.buttons');
        buttonContainer.append(button);
    });
};

const createModals = () => {
    const modalWindow = document.createElement('div');
    modalWindow.className = 'modal';
    modalWindow.style.display = 'none';
    const app = document.querySelector('.app');
    app.append(modalWindow);
    const nextButton = document.createElement('button');
    nextButton.className = 'next-button';
    modalWindow.append(nextButton);
    const closeButton = document.createElement('button');
    closeButton.className = 'close-button';
    modalWindow.append(closeButton);
    const loader = document.createElement('div');
    loader.className = 'loader';
    modalWindow.append(loader);
    modals.forEach((element) => {
        const modalContainer = document.createElement('div');
        modalContainer.className = 'modal-container';
        modalContainer.dataset.type = element.type;
        modalWindow.append(modalContainer);
    });
};

const initDOM = () => {
    createButtons();
    createModals();
    initRandomDog();
    initValorantWeapons();
    initCryptoCurrency(100);
};

export default initDOM;
