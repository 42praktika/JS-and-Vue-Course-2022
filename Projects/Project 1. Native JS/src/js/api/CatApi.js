// const apiKey = 'live_nIfgHvXSkEaNTuGp2zp4j4wxBN4K9XkYUyYcvZyWYomd81i3av5xozihcaLl4r0E';
// как оказалось, ключ нужен, чтобы получать от 10 и более картинок, но мне достаточно и одной за раз
const url = 'https://api.thecatapi.com/v1/images/search';
// я только после посмотрел, что это использовалось в домашках, мб исправлю на другую апишку, главное не забыть

export const getCatAPI = () => {
    const main = document.querySelector('.main');
    const img = document.createElement('img');
    img.classList.add('catAPI');

    fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            img.setAttribute('src', data[0].url);
            console.log(data[0].url)
        })
        .catch(() => {
        throw new Error('Something went wrong from CatApi.js');
    });

    main.append(img);
};
