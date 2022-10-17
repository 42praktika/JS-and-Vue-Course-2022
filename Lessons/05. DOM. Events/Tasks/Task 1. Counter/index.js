const setCounter = () => {
    const main = document.querySelector('.main');
    const button = document.createElement('button')
    main.append(button)
    button.className = 'btn btn-warning';
    button.textContent = `Количество нажатий: 0`;
    button.addEventListener('click', (event) => {button.textContent = 'Количество нажатий: ' + (Number(button.textContent.split(': ')[1]) + 1);
    });
};

export default setCounter;