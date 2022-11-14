import WatchJS from './helpers/melanke-watchjs.js';
import state from './state.js';
import {MODALS_TYPES} from "./const.js";

const watch = WatchJS.watch;

watch(state, 'openedModalType', () => {
    const allModals = document.querySelectorAll('.modal');

    allModals.forEach((item) => {
        item.style.display = 'none';
    });

    if (state.openedModalType !== MODALS_TYPES.NONE) {
        const modal = document.querySelector(`.modal[data-type="${state.openedModalType}"]`);

        modal.style.display = 'block';
    }
});