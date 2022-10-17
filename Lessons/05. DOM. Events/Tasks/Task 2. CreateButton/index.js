const createButton = () => {
    // Начало
    const buttonsContainer = document.querySelector('.button-container');
    const description = document.querySelector('.description');
    const button = document.createElement('button');
    button.className = 'btn btn-warning';
    button.textContent = 'Кнопка';
    buttonsContainer.append(button);

    button.addEventListener('click', function() {
        const span = document.createElement('span');
        description.append(span);
        span.textContent = 'Текст вставлен!'
    })

    // Конец
};

export default createButton;