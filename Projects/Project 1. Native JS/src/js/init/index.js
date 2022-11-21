import {BUTTONS, MODALS, MODALS_TYPES} from "../const";
import state, {catState, factsState} from "../state";
import {closeModal, findOpenedModalIndex} from "../helpers";
import {
    setCatDataState,
    setCatLoaderState,
    setFactDataState,
    setFactLoaderState, setMealDataState, setMealLoaderState
} from "../controller/controller";

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
        const loader = document.createElement('div');

        const modalWindow = document.createElement('div');

        controlButtons.append(prevButton);
        controlButtons.append(closeButton);
        controlButtons.append(nextButton);
        modalWindow.append(controlButtons);
        modalWindow.append(loader);
        app.append(modalWindow);

        loader.className = 'loader';

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

        switch (item.type) {
            case MODALS_TYPES.CATS:
                const img = document.createElement('img');
                img.className = 'modal-window__cat-img';
                img.alt = 'Cat';
                img.src = catState.defaultData;
                modalWindow.append(img);

                img.addEventListener('click', () => {
                    setCatLoaderState(true);
                    setCatDataState();
                    img.onload = () => {
                        setCatLoaderState(false);
                    }
                })
                break;

            case MODALS_TYPES.NUMBERS_FACTS:
                const factContainer = document.createElement('div');
                factContainer.className = 'modal-window__text-container__fact';
                const fact = document.createElement('p');
                fact.className = 'fact';
                fact.textContent = factsState.defaultData;
                const inputField = document.createElement('input');
                inputField.className = 'modal-window__input';
                inputField.type = 'text';
                inputField.placeholder = 'Enter your number';
                const button = document.createElement('button');
                button.className = 'modal-window__show-button';
                button.textContent = 'Show the fact';

                factContainer.append(fact);
                modalWindow.append(factContainer);
                modalWindow.append(inputField);
                modalWindow.append(button);

                button.addEventListener('click', () => {
                    const number = inputField.value !== '' ? inputField.value : '42';
                    setFactLoaderState(true);
                    setFactDataState(number);
                    setFactLoaderState(false);
                });
                break;

            case MODALS_TYPES.MEAL:
                const instructionContainer = document.createElement('div');
                instructionContainer.className = 'modal-window__text-container__meal';
                const instruction = document.createElement('p');
                instruction.className = 'food-instruction';
                instruction.textContent = 'Enter a food category (e.g. Chicken, Vegetarian, Seafood, Breakfast, Dessert, etc.)'
                const mealInputField = document.createElement('input');
                mealInputField.className = 'modal-window__input';
                mealInputField.type = 'text';
                mealInputField.placeholder = 'Enter your category';
                const mealButton = document.createElement('button');
                mealButton.className = 'modal-window__show-button';
                mealButton.textContent = 'Show the meal';
                const carousel = document.createElement('div');
                carousel.className = 'carousel-container';

                instructionContainer.append(instruction);
                modalWindow.append(instructionContainer);
                modalWindow.append(mealInputField);
                modalWindow.append(mealButton);
                modalWindow.append(carousel);

                mealButton.addEventListener('click', () => {
                    if (mealInputField.value !== '') {
                        setMealLoaderState(true);
                        setMealDataState(mealInputField.value, carousel);
                        setMealLoaderState(false);
                    }
                })
        }
    });
}
