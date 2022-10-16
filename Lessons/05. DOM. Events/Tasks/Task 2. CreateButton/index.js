const createButton = () => {
    // Начало
    const buttonContainerElements = document.querySelector('.button-container');
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Кнопка';
    buttonContainerElements.append(button);

    const description = document.querySelector('.description');
    const spanElement = document.createElement('span');
    const spanText = 'Текст вставлен!';
    button.addEventListener('click', () => {
       spanElement.textContent =  spanText;
       description.append(spanElement);
    });
    // Конец
};

export default createButton;