import WatchJS from 'melanke-watchjs';
import state from '../state';
import {MODALS_TYPES} from "../const";
import {getCat} from "../api/catsApi";

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

    // if (state.openedModal === MODALS_TYPES.CATS) {
    //     const catsModalWindow = document.querySelector(`.modal-window[data-type="${MODALS_TYPES.CATS}"]`);
    //     const img = document.querySelector('img');
    //     img.src = getCat();
    // }
});
