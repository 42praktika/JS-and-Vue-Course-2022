import WatchJS from 'melanke-watchjs';
import state, {catState, factsState, mealState} from '../state';
import {MODALS_TYPES} from "../const";
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
});

watch(factsState, 'isLoading', () => {

    const fact = document.querySelector('.fact');
    const showButton = document.querySelector(`.modal-window[data-type="${MODALS_TYPES.NUMBERS_FACTS}"] .modal-window__show-button`);
    const inputField = document.querySelector(`.modal-window[data-type="${MODALS_TYPES.NUMBERS_FACTS}"] .modal-window__input`);
    const loader = document.querySelector(`.modal-window[data-type="${MODALS_TYPES.NUMBERS_FACTS}"] .loader`);

    if (factsState.isLoading) {
        fact.style.display = 'none';
        showButton.style.display = 'none';
        inputField.style.display = 'none';
        loader.style.display = 'block';
    } else {
        loader.style.display = 'none';
        fact.style.display = 'block';
        showButton.style.display = 'block';
        inputField.style.display = 'block';
    }
});

watch(catState, 'isLoading', () => {

    const img = document.querySelector('.modal-window__cat-img');
    const loader = document.querySelector(`.modal-window[data-type="${MODALS_TYPES.CATS}"] .loader`);

    if (catState.isLoading) {
        img.style.display = 'none';
        loader.style.display = 'block';
    } else {
        loader.style.display = 'none';
        img.style.display = 'block';
    }
});

watch(mealState, 'isLoading', () => {
    const mealInputField = document.querySelector(`.modal-window[data-type="${MODALS_TYPES.MEAL}"] .modal-window__input`);
    const mealLoader = document.querySelector(`.modal-window[data-type="${MODALS_TYPES.MEAL}"] .loader`);
    const mealShowButton = document.querySelector(`.modal-window[data-type="${MODALS_TYPES.MEAL}"] .modal-window__show-button`);
    const instruction = document.querySelector('.food-instruction');

    if (mealState.isLoading) {
        mealShowButton.style.display = 'none';
        mealInputField.style.display = 'none';
        instruction.style.display = 'none';
        mealLoader.style.display = 'block';
    } else {
        mealLoader.style.display = 'none';
        instruction.style.display = 'block';
        mealShowButton.style.display = 'block';
        mealInputField.style.display = 'block';
    }
});

watch(factsState, 'data', () => {
    const fact = document.querySelector('.fact');

    if (factsState.data !== null) {
        fact.textContent = factsState.data;
    } else {
        fact.textContent = factsState.defaultData;
    }
});

watch(catState, 'data', () => {
    const img = document.querySelector('.modal-window__cat-img');

    if (catState.data !== null) {
        img.src = catState.data;
    } else {
        img.src = catState.defaultData;
    }
});

watch(catState, 'data', () => {
    const img = document.querySelector('.modal-window__cat-img');

    if (catState.data !== null) {
        img.src = catState.data;
    } else {
        img.src = catState.defaultData;
    }
});

watch(mealState, 'data', () => {
    let carousel = document.querySelector(`.modal-window[data-type="${MODALS_TYPES.MEAL}"] .carousel-container`);
    if (mealState.data !== null) {
        openCarousel(mealState.data, carousel)
    }
});
