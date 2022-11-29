import { MODALS } from "../const";

export const getImage = () => {
    const num = Math.floor(Math.random() * 122) + 1;
    const url = `https://randomfox.ca/images/${num}.jpg`;

    const app = document.querySelector('.app'); // корень
    const window = document.createElement('div'); // контейнер для api
    const windowUp = document.createElement('div'); // заголовок модалки и кнопки
    const windowDown = document.createElement('div'); // содержимое модалки
    const img = document.createElement('img'); // картинка лисички
    const h3 = document.createElement('h3'); // Смешнявка
    const h1 = document.createElement('h1'); // Название

    img.classList.add('image');
    window.classList.add('window');
    windowUp.classList.add('windowUp');
    windowDown.classList.add('windowDown');

    h3.textContent = 'Лисичка!'
    h1.textContent = MODALS[2].text;

    try {
        img.setAttribute('src', url);
    } catch (error) {
        throw new Error('Ошибка');
    }

    windowDown.append(h3 ,img);
    window.append(windowUp, windowDown);
    app.append(window);
};


