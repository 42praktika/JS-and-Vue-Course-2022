// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов

import axios from "axios";

const setCatGallery = () => {
    // Начало
    const url = 'https://api.thecatapi.com/v1/images/search';

    const catContainer = document.querySelector('.main__container');

    const setImages = async () => {
        for (let i = 0; i < 10; i++) {
            let path = '';
            try {
                const response = await axios.get(url);
                path = response.data[0].url;
            } catch (error) {
                throw new Error('Тут какая-то ошибка!');
            }

            const img = document.createElement('img');

            img.setAttribute('src', path);

            catContainer.append(img);
        }
    }

    return setImages().then(() => 'cat gallery is ready!');
    // Конец
};

export default setCatGallery;