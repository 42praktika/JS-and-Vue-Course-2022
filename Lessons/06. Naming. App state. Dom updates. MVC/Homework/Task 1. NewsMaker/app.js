import initDom from "./init.js";
import watchState from "./watchers.js";

const app = () => {
    const state = {
        date: '',
        text: '',
    };
    const buttonSend = document.querySelector('.btn-primary');
    const inputNews = document.querySelector('.form-control');
    buttonSend.addEventListener('click', () => {
        if (inputNews.value === '') {
            alert('Пустой текст!');
        } else {
            initDom();
            state.date = new Date().toLocaleString();
            state.text = inputNews.value;
            inputNews.value = '';
        }
    })
    watchState(state);
}
export default app;