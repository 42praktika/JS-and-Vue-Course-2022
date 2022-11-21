import {MODALS_TYPES} from "../const/index";

export default {
    openedModal: MODALS_TYPES.NONE,
};

export const factsState = {
    data: null,
    isLoading: false,
    defaultData: '42 is the answer to the Ultimate Question of Life, the Universe, and Everything.',
};

export const catState = {
    data: null,
    isLoading: false,
    defaultData: 'img/cat_default.jpg',
};

export const mealState = {
    data: null,
    isLoading: false,
};
