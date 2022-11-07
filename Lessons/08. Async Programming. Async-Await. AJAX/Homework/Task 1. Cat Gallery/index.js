// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов

import axios from "axios";

const setCatGallery = () => {
    let promises = [];
    const main = document.querySelector('.main__container');
    for (let i = 0; i < 10; i++) {
        const promise = axios.get("https://api.thecatapi.com/v1/images/search",  {
            params: {
                type: 'json',
            },
        })
            .then(image => {
                const img = document.createElement('img');
                img.src = image["data"][0]["url"];
                main.append(img);
            })
        promises.push(promise);
    }
     return Promise.all(promises).then(() => "cat gallery is ready!")
};

export default setCatGallery;