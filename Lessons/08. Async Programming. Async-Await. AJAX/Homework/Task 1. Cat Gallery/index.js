// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов

import axios from 'axios';

const setCatGallery = () => {
    // Начало
    const container = document.querySelector('.main__container');
    const api = 'https://api.thecatapi.com/v1/images/search';
    const promises = [];

    for (let i = 0; i < 10; i++) {
        const image = document.createElement('img');
        promises.push(axios(api)
            .then(response => response.data[0].url)
            .then(data => image.setAttribute('src', data))
            .then(() => container.append(image)));
    }

    return Promise.all(promises)
        .then(() => 'cat gallery is ready!')
    // Конец
};

export default setCatGallery;
