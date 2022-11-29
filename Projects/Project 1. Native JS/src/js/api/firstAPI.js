import { MODALS } from "../const";

export const getFact = () => {
    const url = 'http://jservice.io/api/random?count=1';

    const app = document.querySelector('.app'); // корень
    const input = document.createElement('input'); // поле ввода ответа
    const button = document.createElement('button'); // кнопка 'Отправить' ответ
    const window = document.createElement('div'); // контейнер для api
    const windowUp = document.createElement('div'); // заголовок модалки и кнопки
    const windowDown = document.createElement('div'); // содержимое модалки
    const h2 = document.createElement('h2'); // выводится вопрос
    const h1 = document.createElement('h1'); // Заголовок

    window.classList.add('window');
    windowUp.classList.add('windowUp');
    windowDown.classList.add('windowDown');
    button.textContent = 'Ответить';

    windowUp.append(h1);
    windowDown.append(h2, input, button)
    window.append(windowUp, windowDown);
    app.append(window);

    let answer = ''; // тут будет хранится ответ на вопрос

    h1.textContent = MODALS[0].text;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {

            h2.textContent = data[0].question;
            answer = data[0].answer;

            console.log(data);
        })
        .catch((error) => console.log(error));


    button.addEventListener('click', () => {
        if (windowDown.childElementCount > 3) { // тут удаляются выводы информации об ответах
            windowDown.removeChild(h3);
        }

        const h3 = document.createElement('h3'); // вывод информации о правильности ответа
        windowDown.append(h3);

        if (input.value === answer) { // проверка правильности ответа
            h3.textContent = 'Правильно!';
        } else {
            h3.textContent = 'Неправильно!';
        }
    });
};

