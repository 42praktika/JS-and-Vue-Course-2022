const createButton = () => {
    // Начало
    const container = document.querySelector('.button-container');
    const button = document.createElement('button');

    button.className = 'btn btn-warning';

    button.textContent = 'Кнопка';

    container.append(button);

    const description = document.querySelector('.description');
    const span = document.createElement('span');

    button.addEventListener('click', (event) => {
        span.textContent = 'Текст вставлен!';

        description.append(span);
    })
    // Конец
};

export default createButton;