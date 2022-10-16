const createButton = () => {
    const buttonContainer = document.querySelector('div.button-container');
    const button = document.createElement('button');
    button.textContent = 'Кнопка';
    button.className = 'btn btn-primary';
    buttonContainer.append(button);

    button.addEventListener('click', (event) => {
        const spanContainer = document.querySelector('div.description');
        const span = document.createElement('span');
        span.textContent = 'Текст вставлен!';
        spanContainer.append(span);
    })
};

export default createButton;