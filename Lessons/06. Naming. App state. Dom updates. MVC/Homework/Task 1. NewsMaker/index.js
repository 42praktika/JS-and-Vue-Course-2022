import WatchJS from '../../helpers/melanke-watchjs.js';
import watchState from "../../MVC example/watchers";

const { watch } = WatchJS;

const setNewsMaker = () => {
    const func = () => {
        const state = {
            text: '',
            date: ''
        };
        const button = document.querySelector('.btn-primary');
        const input = document.querySelector('input');

        button.addEventListener('click', () => {
            state.date = new Date().toLocaleDateString();
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
        const newsContainer = document.querySelector('.news__container');
        const div1 = document.createElement('div');
        div1.className = 'news__news-element';
        const newDate = document.createElement('h5');
        const div2 = document.createElement('div');
        div2.className = 'newsText';
        div1.append(newDate, div2);
        newsContainer.prepend(div1);
    };
    func();
};

export default setNewsMaker;