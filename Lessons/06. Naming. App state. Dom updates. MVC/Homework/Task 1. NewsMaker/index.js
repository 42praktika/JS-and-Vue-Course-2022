import WatchJS from '../../helpers/melanke-watchjs.js';

const { watch } = WatchJS;

const setNewsMaker = () => {
    // Начало

    const app = () => {
        const state = {
            date: '',
            text:'' ,
        }
        const button = document.querySelector('.btn');
        const input = document.querySelector('input');
        button.addEventListener('click', () => {
            state.date+=new Date().toLocaleString();
            state.text+=input.value;
            input.value = '';
        })
        watchState(state);

    }
    const initDOM = () => {
        const container = document.querySelector('.news__container');
        const newsElement = document.createElement('div');
        newsElement.className = 'news__news-element';
        const h5 = document.createElement('h5');
        const div = document.createElement('div');

        newsElement.append(h5);
        newsElement.append(div);
        container.prepend(newsElement);

        return newsElement;
    }
    const watchState = (state) => {
        watch(state, 'date', () => {
            const newsElement = initDOM();
            newsElement.firstChild.textContent = `${state.date}`;
            newsElement.lastChild.textContent = `${state.text}`;
            state.date='';
            state.text='';
        });
    };

    app();

    // Конец
};

export default setNewsMaker;