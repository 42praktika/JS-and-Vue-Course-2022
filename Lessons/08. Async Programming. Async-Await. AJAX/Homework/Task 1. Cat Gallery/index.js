// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов

import axios from 'axios';

const setCatGallery = () => {
    const promises = [];
    for (let i = 0; i < 10; i++) {
        const promise = axios.get('https://api.thecatapi.com/v1/images/search', {
            params: {
                type: 'json'
            }
        })
            .then((data) => addCatImage(data.data[0].url))
        promises.push(promise);
    }

    return Promise.all(promises).then(() => 'cat gallery is ready!')
};

const addCatImage = (catImageUrl) => {
    const container = document.querySelector('.main__container');
    const catImage = document.createElement('img');
    catImage.src = catImageUrl;

    container.append(catImage);
}

export default setCatGallery;