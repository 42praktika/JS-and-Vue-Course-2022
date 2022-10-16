const createButton = () => {
    // Начало
    const buttonContainer = document.querySelector('div.button-container');
    const button = document.createElement('button');
    button.textContent = 'Кнопка';
    button.className = 'btn btn-primary';
    buttonContainer.append(button);

    button.addEventListener('click', (event) =>{
        const span = document.createElement('span');
        const description = document.querySelector('div.description');
        span.textContent = 'Текст вставлен!';
        description.append(span);
    })
    // Конец
};

export default createButton;