export const setCryptoCurrency = (data) => {
    data.forEach((element, i) => {
        const cryptoItem = document.getElementById(i);

        const rank = cryptoItem.querySelector('.rank');
        rank.textContent = element.rank;

        const designation = cryptoItem.querySelector('.designation');
        designation.textContent = element.symbol;

        const name = cryptoItem.querySelector('.crypto-name');
        name.textContent = `${element.name} `;
        name.append(designation);

        const price = cryptoItem.querySelector('.price');
        price.textContent = element.price_usd;

        const change1H = cryptoItem.querySelector('.change-1h');
        change1H.textContent = `${element.percent_change_1h}%`;
        change1H.classList.add(parseFloat(element.percent_change_1h) < 0 ? 'red' : 'green');

        const change24H = cryptoItem.querySelector('.change-24h');
        change24H.textContent = `${element.percent_change_24h}%`;
        change24H.classList.add(parseFloat(element.percent_change_24h) < 0 ? 'red' : 'green');

        const change7D = cryptoItem.querySelector('.change-7d');
        change7D.textContent = `${element.percent_change_7d}%`;
        change7D.classList.add(parseFloat(element.percent_change_7d) < 0 ? 'red' : 'green');
    });
};
