const createButton = () => {
    // Начало
    const buttonContainer = document.querySelector('.button-container');
    const description = document.querySelector('.description');
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Кнопка';
    const span = document.createElement('span');
    span.textContent = 'Текст вставлен!';
    buttonContainer.append(button);
    button.addEventListener('click', () => {
        description.append(span);
    });
    // Конец
};

export default createButton;