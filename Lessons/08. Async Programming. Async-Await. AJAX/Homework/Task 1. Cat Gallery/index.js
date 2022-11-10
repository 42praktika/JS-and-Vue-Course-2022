// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов

import axios from 'axios';

const setCatGallery = () => {
    const URL = "https://api.thecatapi.com/v1/images/search";
    const countOfImage = 10;
    const main = document.querySelector('.main__container');

    const addImg = async () => {
        for (let i = 0; i < countOfImage; i++) {
            const img = document.createElement('img');
            const url = await axios.get(URL);
            img.setAttribute('src', url.data[0].url);
            main.append(img);
        }
    }
    return addImg().then(() => "cat gallery is ready!");
};

export default setCatGallery;