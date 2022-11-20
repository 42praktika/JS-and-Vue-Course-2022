import WatchJS from 'melanke-watchjs';
import state from '../state/state';
import { MODALS_TYPES } from "@/const/modals";

const watch = WatchJS.watch;

watch(state, 'openedModalType', () => {
    const allWidgets = document.querySelectorAll('.widget');

    allWidgets.forEach(item =>{
        item.style.display = "none";
    });

    if(state.openedModalType !== MODALS_TYPES.NONE) {
        const widget = document.querySelector(`.widget[data-type="${state.openedModalType}"]`);
        widget.style.display = "block";
    }
})