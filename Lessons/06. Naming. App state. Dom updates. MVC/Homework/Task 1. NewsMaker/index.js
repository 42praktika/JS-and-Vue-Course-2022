import WatchJS from '../../helpers/melanke-watchjs.js';

const { watch } = WatchJS;

const setNewsMaker = () => {
    // Начало
    const app = () => {

        const state = {
            date: '',
            text: '',
        };

        const button = document.querySelector('.btn-primary');
        const input = document.querySelector('input');

        button.addEventListener('click', () => {
            init();
            state.date = new Date().toLocaleString();
            state.text = input.value;
            input.value = '';
        });
        watchState(state);
    };

    const watchState = (state) => {
        watch(state, () => {
            document.querySelector('h5').textContent = state.date;
            document.querySelector('.newsText').textContent = state.text;
        });
    };

    const init = () => {
        const container = document.querySelector('.news__container');
        const newElem = document.createElement('div');
        newElem.className = 'news__news-element';
        const createDate = document.createElement('h5');
        const newsText = document.createElement('div');
        newsText.className = 'newsText';
        newElem.append(createDate, newsText);
        container.prepend(newElem);
    };

    app();

    // Конец
};

export default setNewsMaker;