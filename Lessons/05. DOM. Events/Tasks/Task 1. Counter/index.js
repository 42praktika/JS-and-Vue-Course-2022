const setCounter = () => {
    const main = document.querySelector('.main');
    const button = document.createElement('button');
    button.textContent = 'Количество нажатий: 0';
    button.className = 'btn btn-warning';
    main.append(button);

    button.addEventListener('click', (event) => {
        let count = Number(button.textContent.split(': ')[1]) + 1;
        button.textContent = "Количество нажатий: " + count;
            });
};

export default setCounter;