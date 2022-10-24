import WatchJS from '../../helpers/melanke-watchjs.js';

const { watch } = WatchJS;

const setNewsMaker = () => {
    // Начало
    const state = { titles: [], texts: [], }
    const button = document.querySelector('button');

    const watchState = (state) => {
        watch(state, 'titles', () => {
            const newsContainer = document.querySelector('.news__container');
            const newsDiv = document.createElement('div');
            newsDiv.className = 'news__news-element';
            newsDiv.append(document.createElement('h5'), document.createElement('div'));
            newsContainer.prepend(newsDiv);
            
            newsDiv.firstChild.textContent = `${state.titles[state.titles.length - 1]}`;
            newsDiv.lastChild.textContent = `${state.texts[state.texts.length - 1]}`;
        });
    };

    button.addEventListener('click', () => {
        const input = document.querySelector('input');
        state.titles.push(new Date().toLocaleString());
        state.texts.push(input.value);
        input.value = '';
    })

    watchState(state);
    // Конец
};

export default setNewsMaker;