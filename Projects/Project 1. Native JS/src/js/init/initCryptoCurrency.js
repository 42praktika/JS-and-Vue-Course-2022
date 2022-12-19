import { MODAL_TYPES as modalTypes } from '../consts';

export const initCryptoCurrency = (count) => {
    const type = modalTypes.cryptoCurrency;
    const container = document.querySelector(`.modal-container[data-type="${type}"]`);
    for (let i = 0; i < count; i++) {
        const cryptoItem = document.createElement('div');
        cryptoItem.className = 'crypto-currency__item';
        cryptoItem.id = i;
        container.append(cryptoItem);

        const rank = document.createElement('p');
        rank.className = 'rank';
        rank.textContent = '1';
        cryptoItem.append(rank);

        const cryptoName = document.createElement('p');
        cryptoName.textContent = 'Bitcoin ';
        cryptoName.className = 'crypto-name';
        cryptoItem.append(cryptoName);

        const designation = document.createElement('span');
        designation.className = 'designation';
        designation.textContent = 'BTC';
        cryptoName.append(designation);

        const price = document.createElement('p');
        price.textContent = 'Price USD: ';
        cryptoItem.append(price);
        const priceValue = document.createElement('span');
        priceValue.textContent = '4000';
        priceValue.className = 'price';
        price.append(priceValue);

        const change1H = document.createElement('p');
        change1H.textContent = 'Change 1H: ';
        cryptoItem.append(change1H);
        const change1HValue = document.createElement('span');
        change1HValue.textContent = '-2.5%';
        change1HValue.className = 'change-1h';
        change1H.append(change1HValue);

        const change24H = document.createElement('p');
        change24H.textContent = 'Change 24H: ';
        cryptoItem.append(change24H);
        const change24HValue = document.createElement('span');
        change24HValue.textContent = '2.5%';
        change24HValue.className = 'change-24h';
        change24H.append(change24HValue);

        const change7D = document.createElement('p');
        change7D.textContent = 'Change 7D: ';
        cryptoItem.append(change7D);
        const change7DValue = document.createElement('span');
        change7DValue.textContent = '-2.5%';
        change7DValue.className = 'change-7d';
        change7D.append(change7DValue);
    }
};
