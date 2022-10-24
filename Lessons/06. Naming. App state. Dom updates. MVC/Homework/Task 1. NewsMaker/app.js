import init from "./init.js";
import watchState from "./watchers.js";

const app = () => {

    const state = {
        date: '',
        text: ''
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

export default app;