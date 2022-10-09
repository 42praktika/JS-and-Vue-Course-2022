const setCounter = () => {
    // Начало
    const mainElement = document.querySelector('.main');
    const button = document.createElement('button');
    button.className = 'btn btn-warning';
    button.textContent = 'Количество нажатий: 0';
    mainElement.append(button);
    button.addEventListener('click', (event) => {
        const currentElement = event.target;
        const text = currentElement.textContent;
        const number = Number(text.split(': ')[1]);
        currentElement.textContent = 'Количество нажатий: ' + (number + 1);
    })
    // Конец
};

export default setCounter;