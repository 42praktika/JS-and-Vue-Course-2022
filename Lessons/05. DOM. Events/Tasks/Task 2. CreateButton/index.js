const createButton = () => {
    // Начало
    const buttonElement = document.querySelector('.button-container');
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Кнопка';
    buttonElement.append(button);
    button.addEventListener('click', (event) => {
        const descriptionElement = document.querySelector('.description');
        const spanElement = document.createElement('span');
        const text = 'Текст вставлен!';
        spanElement.append(text);
        descriptionElement.append(spanElement);
    })
    // Конец
};

export default createButton;
