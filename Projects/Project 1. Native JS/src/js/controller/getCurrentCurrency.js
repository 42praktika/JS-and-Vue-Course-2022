const URL = 'https://api.coinlore.net/api/tickers/?start=0&limit=';

export const getCryptoCurrency = (limit) => fetch(URL + limit)
    .then((response) => response.json())
    .catch((e) => alert(e));
