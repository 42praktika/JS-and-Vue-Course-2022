import WatchJS from "melanke-watchjs";
import ModalState from "../state/ModalState";
import { MODAL_APIS } from "../const/ApiConst";

const watch = WatchJS.watch;

watch(ModalState, 'openedModalApi', () => {
    const allModals = document.querySelectorAll('.modal');

    allModals.forEach((elem) => {
        elem.classList.remove('active');
    });

    if (ModalState.openedModalApi !== MODAL_APIS.NONE) {
        const modal = document.querySelector(`.modal[data-type="${ModalState.openedModalApi}"]`);

        modal.classList.add('active');
    }
});