import WatchJS from 'melanke-watchjs';
import state from '../state';
import {MODALS_TYPES} from "../const";
import {getCatPromise} from "../api/catsApi";
import {getFactPromise} from "../api/numbersApi";
import {getMealPromise} from "../api/mealApi";
import {openCarousel} from "../carousel/main";

const watch = WatchJS.watch;
watch(state, 'openedModal', () => {
    const modalWindows = document.querySelectorAll('.modal-window');

    modalWindows.forEach((item) => {
        item.style.display = 'none';
    });

    if (state.openedModal !== MODALS_TYPES.NONE) {
        const openedModalWindow = document.querySelector(`.modal-window[data-type="${state.openedModal}"]`);
        openedModalWindow.style.display = 'block';
    }

    switch (state.openedModal) {
        case MODALS_TYPES.CATS:
            const img = document.querySelector('.modal-window__cat-img');
            const loader = document.querySelector(`.modal-window[data-type="${MODALS_TYPES.CATS}"] .loader`);

            img.addEventListener('click', () => {
                img.style.display = 'none';
                loader.style.display = 'block';

                getCatPromise().then(response => {
                    img.src = response;
                });
                img.onload = () => {
                    loader.style.display = 'none';
                    img.style.display = 'block';
                };
            })
            break;
        case MODALS_TYPES.NUMBERS_FACTS:
            const showButton = document.querySelector(`.modal-window[data-type="${MODALS_TYPES.NUMBERS_FACTS}"] .modal-window__show-button`);
            const fact = document.querySelector('.fact');
            const inputField = document.querySelector(`.modal-window[data-type="${MODALS_TYPES.NUMBERS_FACTS}"] .modal-window__input`);
            const factLoader = document.querySelector(`.modal-window[data-type="${MODALS_TYPES.NUMBERS_FACTS}"] .loader`);

            showButton.addEventListener('click', () => {
                fact.style.display = 'none';
                showButton.style.display = 'none';
                inputField.style.display = 'none';
                factLoader.style.display = 'block';

                const number = inputField.value !== '' ? inputField.value : '42';
                getFactPromise(number).then(response => {
                    fact.textContent = response;
                });

                factLoader.style.display = 'none';
                fact.style.display = 'block';
                showButton.style.display = 'block';
                inputField.style.display = 'block';
            })
            break;

        case MODALS_TYPES.MEAL:
            let carousel = document.querySelector(`.modal-window[data-type="${MODALS_TYPES.MEAL}"] .carousel-container`);
            const mealInputField = document.querySelector(`.modal-window[data-type="${MODALS_TYPES.MEAL}"] .modal-window__input`);
            const mealLoader = document.querySelector(`.modal-window[data-type="${MODALS_TYPES.MEAL}"] .loader`);
            const mealShowButton = document.querySelector(`.modal-window[data-type="${MODALS_TYPES.MEAL}"] .modal-window__show-button`);
            const instruction = document.querySelector('.food-instruction');

            mealShowButton.addEventListener('click', () => {

                if (mealInputField.value !== '') {
                    mealShowButton.style.display = 'none';
                    mealInputField.style.display = 'none';
                    instruction.style.display = 'none';
                    mealLoader.style.display = 'block';

                    getMealPromise(mealInputField.value).then(arrayOfMeal => {
                        openCarousel(arrayOfMeal, carousel);
                    });

                    mealLoader.style.display = 'none';
                    instruction.style.display = 'block';
                    mealShowButton.style.display = 'block';
                    mealInputField.style.display = 'block';
                }
            })
            break;
    }
});
