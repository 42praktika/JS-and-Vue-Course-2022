// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов

import axios from 'axios';

const setCatGallery = () => {
    // Начало
    const addImg = async () => {
        for (let i = 0; i <10; i++) {
            let container = document.querySelector('.main__container');
            let img = document.createElement('img');
            let url = await axios.get('https://api.thecatapi.com/v1/images/search');
            img.src = await url.data[0].url;
            container.appendChild(img);
        }
    }
    return addImg().then(() => "cat gallery is ready!");

    // Конец
};

export default setCatGallery;