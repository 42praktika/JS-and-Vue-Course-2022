import WatchJS from './melanke-watcher.js';
import state from '../state.js'
import { modalWindows } from '../consts.js';

const watch = WatchJS.watch;

watch(state, 'openedModalType', () => {
    console.log("state has changed!");
    const allModals = document.querySelectorAll('.modal');

    allModals.forEach((modal) => {
        modal.style.display = 'none';
    });

    if (state.openedModalType !== modalWindows.none) {
        const modal = document.querySelector(`.modal[data-type="${state.openedModalType}"]`);
        modal.style.display = 'block';
    }
});