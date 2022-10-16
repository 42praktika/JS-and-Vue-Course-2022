import WatchJS from '../../helpers/melanke-watchjs.js';

const { watch } = WatchJS;

const watchState = (state) => {
    const newsContainer = document.querySelector('.news__container');
    watch(state, 'count', () => {
        const newsElement = document.createElement('div');
        newsElement.className = 'news__news-element';
        newsContainer.prepend(newsElement)
        const date = document.createElement('h5');
        date.textContent = state.date;
        newsElement.append(date);
        const text = document.createElement('div');
        text.textContent = state.text;
        newsElement.append(text);
        const formControl = document.querySelector('.form-control');
        formControl.value = '';
    });
}

const app = () => {
    const state = {
        date: 0,
        text: 0,
        count: 0,
    }
    const formControl = document.querySelector('.form-control');
    const button = document.querySelector('.btn-primary');
    button.addEventListener('click', () => {
        state.date = new Date().toLocaleString();
        state.text = formControl.value;
        state.count ++;
    });
    watchState(state);
}

const setNewsMaker = () => {
    // Начало
    app();
    // Конец
};

export default setNewsMaker;