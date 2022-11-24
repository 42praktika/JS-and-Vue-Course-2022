import {BUTTONS, MODALS, MODALS_TYPES,ARRAY_RICKANDMORTY} from "../const";
import '../watchers';
import state, {stateInfoRickAndMorty, stateGetApiInfo} from "../state";

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
        modalTittle.textContent = item.text;

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

export const initModalsForApi = () => {
    const modalContent = document.querySelectorAll('.modal__content');
    const imgOfDog = document.createElement('img');
    imgOfDog.src = 'https://img1.fonwall.ru/o/it/animals-snow-winter-dog.jpeg'
    const button = document.createElement('button');
    button.classList.add('btn-dogs');
    button.textContent = 'Получить собаку!';
    imgOfDog.classList.add('img-dog');
    modalContent[0].append(imgOfDog,button);

    const selectElement = document.createElement('select');
    const divSelectElement = document.createElement('div');
    const divInfoElement = document.createElement('div');

    divInfoElement.classList.add('information-RickAndMorty');
    for (let item in stateInfoRickAndMorty) {
        const divElementInfo = document.createElement('div');
        divElementInfo.classList.add(stateInfoRickAndMorty[item])
        divInfoElement.append(divElementInfo);
    }
    const divImg = document.createElement('div');
    divImg.classList.add('img-div');
    const imgRickAndMorty = document.createElement('img');
    imgRickAndMorty.src = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg';
    imgRickAndMorty.classList.add('img-RickAndMorty');
    divImg.append(imgRickAndMorty);
    divSelectElement.classList.add('div-select')
    modalContent[1].append(divSelectElement,divImg,divInfoElement);
    selectElement.classList.add('select-RickAndMorty');
    divSelectElement.append(selectElement);

    ARRAY_RICKANDMORTY.forEach((item, index) => {
        const optionElement = document.createElement('option');
        optionElement.classList.add('option-RickAndMorty');
        optionElement.value = index;
        optionElement.textContent = item;
        selectElement.append(optionElement);
    })

    const divGetApiElement = document.createElement('div');
    divGetApiElement.classList.add('div-apiInfo');
    for (const item in stateGetApiInfo) {
        const divApiInfo = document.createElement('div');
        divApiInfo.classList.add(stateGetApiInfo[item])
        divGetApiElement.append(divApiInfo);
    }
    const inputElement = document.createElement('input');
    const buttonElement = document.createElement('button');
    inputElement.classList.add('input-api');
    buttonElement.classList.add('button-api');
    inputElement.setAttribute('placeholder', '178.205.201.250');
    buttonElement.textContent = 'Получить данные!'
    modalContent[2].append(inputElement, buttonElement, divGetApiElement);

    const loader = document.createElement('div');
    loader.setAttribute('id', 'loader');

    modalContent[0].append(loader);
}

document.addEventListener('click', (event) => {
    const allModals = document.querySelectorAll('.modal__body');
    allModals.forEach((item) => {
        if (event.target === item) {
            closeModal();
        }
    })
});




