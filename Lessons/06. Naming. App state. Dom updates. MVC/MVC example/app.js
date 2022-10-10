import watchState from './watchers.js';

const app = () => {
    // Состояние приложения
    const state = {
        number: 0,
    };

    // Навешиваем обработчики событий в интерфейсе
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        state.number += 1;
    });

    // Отслеживаем изменения состояния
    watchState(state);
};

export default app;