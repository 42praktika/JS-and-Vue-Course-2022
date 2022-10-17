const setCounter = () => {
    // Начало
    const main = document.querySelector('.main');
    const button = document.createElement('button');

    button.className = 'btn btn-warning';

    const textOnButton = 'Количество нажатий: ';
    let numberOnButton = 0;
    button.textContent = textOnButton + numberOnButton;

    button.addEventListener('click', (event) => {
        numberOnButton++;
        button.textContent = textOnButton + numberOnButton;
    })

    main.append(button);
    // Конец
};

export default setCounter;