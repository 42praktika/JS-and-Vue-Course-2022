export const MODALS_TYPES = {
    NONE: 'none',
    CATS: 'cats',
    MEAL: 'meal',
    NUMBERS_FACTS: 'numbers-facts',
};

export const BUTTONS = [
    {
        text: 'CATS',
        type: MODALS_TYPES.CATS,
    },
    {
        text: 'FACTS ABOUT NUMBERS',
        type: MODALS_TYPES.NUMBERS_FACTS,
    },
    {
        text: 'MEAL',
        type: MODALS_TYPES.MEAL,
    },
];

export const MODALS = [
    {
        type: MODALS_TYPES.CATS,
    },
    {
        type: MODALS_TYPES.MEAL,
    },
    {
        type: MODALS_TYPES.NUMBERS_FACTS,
    },
];
