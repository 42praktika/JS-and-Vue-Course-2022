import WatchJS from '../../helpers/melanke-watchjs.js';

const { watch } = WatchJS;

const setNewsMaker = () => {
    // Начало

    const app = () => {

        const state = {
            titles: [],
            texts: [],
        }

        const button = document.querySelector('button');
        const inputElement = document.querySelector('input');
        button.addEventListener('click', () => {
            state.titles.push(new Date().toLocaleString());
            state.texts.push(inputElement.value);
            inputElement.value = '';
        })

        watchState(state);
    }

    const watchState = (state) => {
        watch(state, 'titles', () => {
            const newsElement = initDOM();
            newsElement.firstChild.textContent = `${state.titles[state.titles.length - 1]}`;
            newsElement.lastChild.textContent = `${state.texts[state.texts.length - 1]}`;
        });
    };

    const initDOM = () => {
        const newsContainer = document.querySelector('.news__container');
        const newsElement = document.createElement('div');
        newsElement.className = 'news__news-element';
        const newsElementTitle = document.createElement('h5');
        const newsElementText = document.createElement('div');

        newsElement.append(newsElementTitle, newsElementText);
        newsContainer.prepend(newsElement);

        return newsElement;
    }

    app();

    // Конец
};

export default setNewsMaker;
