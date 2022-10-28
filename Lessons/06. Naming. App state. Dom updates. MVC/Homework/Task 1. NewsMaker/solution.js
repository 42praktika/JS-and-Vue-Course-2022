import WatchJS from './melanke-watchjs/watch.js';

const { watch } = WatchJS;

const watchState = (state) => {
    watch(state, 'form', () => {
        if (state.form.text === '') {
            const input = document.querySelector('.form-control');
            input.value = '';
        }
    });

    watch(state, 'news', () => {
        const newsContainer = document.querySelector('.news__container');
        newsContainer.innerHTML = '';
        state.news.forEach(({ date, text }) => {
            const newDomItem = document.createElement('div');
            newDomItem.classList.add('news__news-element');

            const itemHeaderElement = document.createElement('h5');
            itemHeaderElement.textContent = date;

            const itemTextElement = document.createElement('div');
            itemTextElement.textContent = text;

            newDomItem.append(itemHeaderElement, itemTextElement);
            newsContainer.prepend(newDomItem);
        });
    });
};

const addListeners = (state) => {
    const input = document.querySelector('.form-control');
    const button = document.querySelector('.btn');

    input.addEventListener('input', (event) => {
        state.form.text = event.target.value;
    });

    button.addEventListener('click', () => {
        const newItem = {
            date: new Date().toLocaleString(),
            text: state.form.text,
        };
        state.news.push(newItem);
        state.form.text = '';
    });
};

const setNewsMaker = () => {
    // Состояние приложения - слой Model
    // В данном объекте храним все необходимые для работы приложения данные
    const state = {
        form: {
            text: '',
        },
        news: [],
    };

    // Мозги приложения - слой Controller
    // Создаем обработчики для событий в слое View (в интерфейсе)
    // Единственная ответственность обработчиков - обновлять состояние приложения (слой Model)
    addListeners(state);

    // Работа со слоем View
    // Единственная ответственность вотчеров - обновлять DOM при изменении состояния
    watchState(state);
};

export default setNewsMaker;