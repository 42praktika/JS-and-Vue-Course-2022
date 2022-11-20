export const MODALS_TYPES = {
    NONE: 'none',
    SHOWS: 'shows',
    DOGS: 'dogs',
    MAKEUP: 'makeup',
};

export const BUTTONS = [
    {
        text: 'TV SHOWS',
        type: MODALS_TYPES.SHOWS,
    },
    {
        text: 'GET A DOG',
        type: MODALS_TYPES.DOGS,
    },
    {
        text: 'MAKEUP PRODUCTS',
        type: MODALS_TYPES.MAKEUP,
    },
];

export const MODALS = [
    {
        text: 'Enter the title of TV show ang get it!',
        type: MODALS_TYPES.SHOWS,
    },
    {
        text: 'Select a breed of dog and get picture!',
        type: MODALS_TYPES.DOGS,
    },
    {
        text: 'Select brand and type of product and get all products!',
        type: MODALS_TYPES.MAKEUP,
    },
];
