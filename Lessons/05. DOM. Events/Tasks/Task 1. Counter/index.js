const setCounter = () => {
    const elem = document.querySelector('.main');
    const button = document.createElement('button');
    button.className = 'btn btn-warning';

    elem.appendChild(button);

    let counter = 0;
    button.addEventListener('click', () => {
        counter++;
        return button.textContent = 'Количество нажатий: ' + counter;
    })

    button.textContent = 'Количество нажатий: ' + counter;

};

export default setCounter;