// В примере библиотека melanke-watchjs выделена в отдельный файл, потому что для отслеживания
// изменений вариант с обычным использованием библиотеки (как npm-пакета) не подходит.
// В проекте необходимо использовать базовый вариант (npm-пакет)
import WatchJS from './../helpers/melanke-watchjs.js';

const { watch } = WatchJS;

const watchState = (state) => {
    const countText = 'Количество нажатий: ';
    const button = document.querySelector('button');

    // Отслеживаем изменение ключа "number" в состоянии
    watch(state, 'number', () => {
        button.textContent = `${countText} ${state.number}`;
    });
};

export default watchState;