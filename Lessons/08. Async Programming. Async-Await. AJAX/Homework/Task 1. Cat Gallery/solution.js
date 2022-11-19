// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов

// import axios from 'axios';

const SEARCH_URL = 'https://api.thecatapi.com/v1/images/search';

const renderPhoto = (url) => {
    const container = document.querySelector('.main__container');
    const img = document.createElement('img');
    img.src = url;
    container.append(img);
};

const setCatGallery = () => {
    // Начало
    const NUM_OF_CATS = 10;
    const promises = [];

    for (let i = 0; i < NUM_OF_CATS; i += 1) {
        promises.push(axios.get(SEARCH_URL));
    }

    return Promise.all(promises).then((responses) => {
        responses.forEach(({ data }) => renderPhoto(data[0].url));
        return 'cat gallery is ready!';
    });
    // Конец
};

export default setCatGallery;