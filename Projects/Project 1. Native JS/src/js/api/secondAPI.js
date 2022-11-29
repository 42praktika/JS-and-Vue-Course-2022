import { MODALS } from "../const";

export const getWhatToDo = () => {
    const url = 'http://www.boredapi.com/api/activity/';

    const app = document.querySelector('.app'); // корень
    const window = document.createElement('div'); // контейнер для api
    const windowUp = document.createElement('div'); // заголовок модалки и кнопки
    const windowDown = document.createElement('div'); // содержимое модалки
    const ul = document.createElement('ul'); // контейнер для вывода в виде пунктов

    const liActivity = document.createElement('li'); // пункт
    const liType = document.createElement('li'); // пункт
    const liAccessibility = document.createElement('li'); // пункт
    const liPrice = document.createElement('li'); // пункт

    const h4_1 = document.createElement('h4'); // инофрмация
    const h4_2 = document.createElement('h4'); // инофрмация

    const h1 = document.createElement('h1'); // Название

    h1.textContent = MODALS[1].text;

    h4_1.textContent = '\"Доступность\" - значение от 0 до 1, показывающее, насколько сложно выполнить это активность.'
    h4_2.textContent = '\"Стоимость\" - значение от 0 до 1, показывающее, насколько дорого заниматься этой активностью.'

    ul.append(liActivity, liType, liAccessibility, liPrice);

    window.classList.add('window');
    windowUp.classList.add('windowUp');
    windowDown.classList.add('windowDown');

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            liActivity.textContent = 'Активность: ' + data.activity;
            liType.textContent = 'Тип: ' + data.type;
            liAccessibility.textContent = 'Доступность: ' + data.accessibility;
            liPrice.textContent = 'Стоимость: ' + data.price;
            console.log(data);
        })
        .catch((error) => console.log(error));

    windowUp.append(h1);
    windowDown.append(ul, h4_1, h4_2);
    window.append(windowUp, windowDown);
    app.append(window);
};