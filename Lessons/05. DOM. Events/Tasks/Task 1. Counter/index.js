const setCounter = () => {
    // Начало
    const main = document.querySelector('.main');
    const button = document.createElement('button');
    button.className = 'btn btn-warning';
    main.append(button);
    let counter = 0;
    button.addEventListener('click', () => {
        counter++;
        return button.textContent = 'Количество нажатий: ' + counter;
    })
    button.textContent = 'Количество нажатий: ' + counter;

    // Конец
};

export default setCounter;