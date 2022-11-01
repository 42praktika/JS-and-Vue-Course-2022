import WatchJS from '../../MVC example/helpers/melanke-watchjs.js';

const { watch } = WatchJS;

const setNewsMaker = () => {
    app();
};

const watchState = (state) => {
    const newsContainer = document.querySelector('.news__container');
    const formControl = document.querySelector('.form-control');

    watch(state, 'count', () => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news__news-element';
        const newsDate = document.createElement('h5');
        newsDate.textContent = new Date().toLocaleString();
        const newsText = document.createElement('div');
        newsText.textContent = formControl.value;
        formControl.value = '';
        newsItem.append(newsDate, newsText);
        newsContainer.insertBefore(newsItem, newsContainer.firstChild);
    });
}

const app = () => {
    let state = {
        count: 0
    }
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', event => {
        state.count += 1;
    })

    watchState(state);
}
export default setNewsMaker;