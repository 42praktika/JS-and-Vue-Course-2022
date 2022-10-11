const createButton = () => {
    // Начало
    const main = document.body.querySelector('.container');
    const button = document.createElement('button');
    button.textContent = 'Кнопка';
    main.append(button);
    button.addEventListener('click', () => {
        const description = document.querySelector('.description');
        const textSpan = document.createElement('span');
        textSpan.textContent = 'Текст вставлен!';
        description.append(textSpan);
    });
    // Конец
};

module.exports = createButton;