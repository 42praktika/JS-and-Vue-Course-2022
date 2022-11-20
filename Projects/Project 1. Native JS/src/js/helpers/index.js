import state from "../state/index";
import {MODALS, MODALS_TYPES} from "../const";

export const closeModal = () => {
    state.openedModal = MODALS_TYPES.NONE;
}

export const findOpenedModalIndex = () => {
    return MODALS.findIndex((item) => item.type === state.openedModal);
}
