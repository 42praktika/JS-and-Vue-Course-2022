import { MODAL_TYPES as modalTypes } from '../consts';

export const initRandomDog = () => {
    const type = modalTypes.randomDog;
    const container = document.querySelector(`.modal-container[data-type="${type}"]`);
    const image = document.createElement('img');
    image.className = 'random-dog__image';
    container.append(image);
    const getNextButton = document.createElement('button');
    getNextButton.textContent = 'Next photo';
    getNextButton.className = 'modal-button next-dog';
    container.append(getNextButton);
};
