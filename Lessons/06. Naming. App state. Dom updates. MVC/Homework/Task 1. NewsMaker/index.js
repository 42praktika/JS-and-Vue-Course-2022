import WatchJS from '../../helpers/melanke-watchjs.js';

const { watch } = WatchJS;

const setNewsMaker = () => {

    const newsContainer = document.querySelector('.news__container');
    const btn = document.querySelector('.btn');
    const formControl = document.querySelector('.form-control');
    btn.addEventListener('click', event => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news__news-element';
        const newsDate = document.createElement('h5');
        newsDate.textContent = new Date().toLocaleString();
        const newsText = document.createElement('div');
        newsText.textContent = formControl.value;
        formControl.value = '';
        newsItem.append(newsDate, newsText);
        newsContainer.insertBefore(newsItem, newsContainer.firstChild);
    })
};

export default setNewsMaker;