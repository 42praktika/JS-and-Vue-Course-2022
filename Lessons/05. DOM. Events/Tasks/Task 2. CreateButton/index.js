const createButton = () => {
    const buttonContainer = document.querySelector('.button-container');
    const button = document.createElement('button');
    const description = document.querySelector('.description');
    buttonContainer.append(button);
    button.textContent = 'Кнопка';
    button.className = 'btn btn-primary';
    button.addEventListener('click', (event) => {
        const desc = document.createElement('span');
        desc.textContent = 'Текст вставлен!'
        description.append(desc);
    });
};

export default createButton;