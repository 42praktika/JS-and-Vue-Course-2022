export const MODAL_TYPES = {
    randomDog: 'random-dog',
    valorantWeapons: 'valorant-weapons',
    cryptoCurrency: 'crypto-currency',
};

export const BUTTONS = [
    {
        title: 'Random Dog',
        type: MODAL_TYPES.randomDog,
    },
    {
        title: 'Valorant Weapons',
        type: MODAL_TYPES.valorantWeapons,
    },
    {
        title: 'Crypto Currency',
        type: MODAL_TYPES.cryptoCurrency,
    },
];

export const MODALS = [
    {
        type: MODAL_TYPES.randomDog,
    },
    {
        type: MODAL_TYPES.valorantWeapons,
    },
    {
        type: MODAL_TYPES.cryptoCurrency,
    },
];

export const STATE = {
    status: 'closed',
    currentWindowIndex: null,
    data: null,
};
