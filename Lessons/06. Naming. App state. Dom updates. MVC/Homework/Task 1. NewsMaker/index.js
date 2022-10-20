import WatchJS from './../../helpers/melanke-watchjs.js';

const { watch } = WatchJS;

const setNewsMaker = () => {
    const state = {
        newsCount: 0,
        currentNewsText: "",
        currentNewsDate: ""
    };

    const addButton = document.querySelector('button.btn-primary');
    const input = document.querySelector('input.form-control');
    addButton.addEventListener('click', (event) => {
        state.newsCount++;
        state.currentNewsText = input.value;
        state.currentNewsDate = new Date().toLocaleString();
    })


    watchState(state);
};

const watchState = (state) => {
    const input = document.querySelector('input.form-control');
    const newsContainer = document.querySelector('.news__container');

    watch(state, 'newsCount', () => {
        const news = document.createElement('div');
        news.className = "news__news-element";
        const newsDate = document.createElement('h5');
        newsDate.textContent = state.currentNewsDate;
        const newsText = document.createElement('div');
        newsText.textContent = state.currentNewsText;

        news.append(newsDate, newsText);
        newsContainer.insertAdjacentElement('afterbegin', news);

        input.value = '';
    });
};

export default setNewsMaker;