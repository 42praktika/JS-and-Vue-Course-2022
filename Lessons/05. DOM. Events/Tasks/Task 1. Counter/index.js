const setCounter = () => {
    const element = document.querySelector('.main');
    const button = document.createElement('button');
    button.className = 'btn btn-warning';

    element.appendChild(button);

    let count = 0;
    button.addEventListener('click', () => {
        count++;
        return button.textContent = 'Количество нажатий: ' + count;
    })

    button.textContent = 'Количество нажатий: ' + count;

};

export default setCounter;