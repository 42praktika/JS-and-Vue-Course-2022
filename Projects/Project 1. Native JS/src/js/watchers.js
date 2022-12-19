import WatchJS from 'melanke-watchjs';
import { MODALS as modals, MODAL_TYPES as types } from './consts';
import { setRandomDog } from './view/setRandomDog';
import { setValorantWeapons } from './view/setValorantWeapons';
import { setCryptoCurrency } from './view/setCryptoCurrency';

const { watch } = WatchJS;

const watchState = (state) => {
    watch(state, 'status', () => {
        const modalWindow = document.querySelector('.modal');
        const loader = document.querySelector('.loader');
        switch (state.status) {
        case 'loading':
            modalWindow.style.display = 'flex';
            loader.style.display = 'block';
            break;
        case 'opened':
            modalWindow.style.display = 'flex';
            loader.style.display = 'none';
            break;
        case 'closed':
            modalWindow.style.display = 'none';
            break;
        }
    });

    watch(state, 'currentWindowIndex', () => {
        const openedWindow = document.querySelector('.modal-container[style]');
        if (openedWindow) {
            openedWindow.removeAttribute('style');
        }
        const currentWindowType = modals[state.currentWindowIndex].type;
        const currentWindow = document.querySelector(`.modal-container[data-type=${currentWindowType}]`);
        currentWindow.style.display = 'flex';
    });

    watch(state, 'data', () => {
        switch (modals[state.currentWindowIndex].type) {
        case types.randomDog:
            setRandomDog(state.data);
            break;
        case types.valorantWeapons:
            setValorantWeapons(state.data);
            break;
        case types.cryptoCurrency:
            setCryptoCurrency(state.data);
            break;
        }
    });
};

export default watchState;
