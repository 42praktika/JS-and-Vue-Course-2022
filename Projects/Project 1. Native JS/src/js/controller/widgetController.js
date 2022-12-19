import { MODALS as modals, MODAL_TYPES as types, STATE as state } from '../consts';
import { getRandomDog } from './getRandomDog';
import { getValorantWeapon } from './getValorantWeapon';
import { getCryptoCurrency } from './getCurrentCurrency';

const randomDog = () => {
    state.status = 'loading';
    getRandomDog()
        .then((data) => {
            state.data = { url: URL.createObjectURL(data) };
            state.status = 'opened';
        });
};

const valorantWeapons = () => {
    state.status = 'loading';
    const uuid = document.querySelector('.valorant-weapons__select').value;
    getValorantWeapon(uuid)
        .then((data) => {
            state.data = data.data;
            state.status = 'opened';
        });
};

const cryptoCurrency = (limit) => {
    state.status = 'loading';
    getCryptoCurrency(limit)
        .then((data) => {
            state.data = data.data;
            state.status = 'opened';
        });
};

export const updateData = (state) => {
    switch (modals[state.currentWindowIndex].type) {
    case types.randomDog:
        randomDog();
        break;
    case types.valorantWeapons:
        valorantWeapons();
        break;
    case types.cryptoCurrency:
        cryptoCurrency(100);
        break;
    }
};

const setRandomDogEventListeners = () => {
    const update = document.querySelector('.next-dog');
    update.addEventListener('click', () => randomDog());
};

const setValorantWeaponsEventListeners = () => {
    const select = document.querySelector('.valorant-weapons__select');
    select.addEventListener('change', () => valorantWeapons());
};

export const setEventListeners = () => {
    setRandomDogEventListeners();
    setValorantWeaponsEventListeners();
};
