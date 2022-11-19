export const MODALS_TYPES = {
    NONE: 'none',
    FIRST: 'CatFacts',
    SECOND: 'Holidays',
    THIRD: 'Currency',
};

export const BUTTONS = [
    {
        text: 'Facts about cats',
        type: MODALS_TYPES.FIRST,
    },
    {
        text: 'Holidays',
        type: MODALS_TYPES.SECOND,
    },
    {
        text: 'Exchange rate',
        type: MODALS_TYPES.THIRD,
    },
];

export const MODALS = [
    {
        text: 'Interesting facts about cats',
        type: MODALS_TYPES.FIRST,
    },
    {
        text: 'Information about holidays',
        type: MODALS_TYPES.SECOND,
    },
    {
        text: 'Exchange rate on the selected date',
        type: MODALS_TYPES.THIRD,
    },
];