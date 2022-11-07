// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов

import axios from 'axios';


const addImage = (url) => {
    const container = document.body.querySelector('.main__container');
    const img = document.createElement('img');
    img.setAttribute('src', url);
    container.append(img)
}

const setCatGallery = () => {
    const promises = [];
    for (let i = 0; i < 10; i++) {
        let promise = axios.get('https://api.thecatapi.com/v1/images/search')
            .then((response) => response.data[0].url)
            .then((data) => addImage(data))
        promises.push(promise)
    }
    return Promise
        .all(promises)
        .then(() => "cat gallery is ready!")
};

export default setCatGallery;