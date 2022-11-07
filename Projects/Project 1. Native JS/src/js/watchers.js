import WatchJS from 'melanke-watchjs'
import { modalType } from "./const"
import state from "./state";


const watch = WatchJS.watch

watch(state, 'openedModalType', () => {
    const allModals = document.querySelectorAll('.modal');

    allModals.forEach((item) => {
        item.style.display = 'none';
    });

    if (state.openedModalType !== modalType.NONE) {
        const modal = document.querySelector(`.modal[data-type="${state.openedModalType}"]`);

        modal.style.display = 'block';
    }
})

export default watch
