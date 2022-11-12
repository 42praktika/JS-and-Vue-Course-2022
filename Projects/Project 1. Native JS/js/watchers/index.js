import WatchJS from 'melanke-watchjs';
import state from "../state";
import {MODALS, MODALS_TYPES} from "../const";

const watch = WatchJS.watch;

watch(state, 'openedModalType', () => {
    const allModals = document.querySelectorAll('.modal');
    allModals.forEach((item) => {
        item.classList.remove('modal__active');
    })
    if (state.openedModalType !== MODALS_TYPES.NONE) {
        const modal = document.querySelector(`.modal[data-type="${state.openedModalType}"]`);
        modal.classList.add('modal__active');
    }
});