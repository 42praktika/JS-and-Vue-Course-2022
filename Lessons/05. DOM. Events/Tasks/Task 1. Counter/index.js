const setCounter = () => {
    // Начало
    let clickCounts = 0;
    const buttonText = 'Количество нажатий:';
    const main = document.querySelector('.main');
    const button = document.createElement('button');
    button.className = "btn btn-warning";
    button.textContent = `${buttonText} ${clickCounts}`;
    main.append(button);
    button.addEventListener('click', () => {
        clickCounts ++;
        button.textContent = `${buttonText} ${clickCounts}`;
    });
    // Конец
};

export default setCounter;