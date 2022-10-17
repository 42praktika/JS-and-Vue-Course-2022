const createButton = () => {
    // Начало

    const buttonText = 'Кнопка';
    const buttonContainer = document.querySelector('.button-container');
    const button = document.createElement('button');
    button.classList.add('btn', 'button-primary');
    button.textContent = `${buttonText}`;

    const spanText = 'Текст вставлен!';
    const description = document.querySelector('.description');
    const span = document.createElement('span');
    span.textContent = `${spanText}`;

    button.addEventListener('click', (event) => {
        description.append(span);

    })

    buttonContainer.append(button);

    // Конец
};

export default createButton;