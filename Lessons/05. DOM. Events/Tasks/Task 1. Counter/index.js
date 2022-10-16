const setCounter = () => {
    // Начало
    const button = document.createElement('button');
    const main = document.querySelector('.main');
    button.textContent = 'Количество нажатий: 0';
    button.className = 'btn btn-warning';

    main.append(button);
    let count = 0;
    button.addEventListener('click', (event) => {
        count++;
        return button.textContent = 'Количество нажатий: ' + count;
    })
    // Конец
};

export default setCounter;