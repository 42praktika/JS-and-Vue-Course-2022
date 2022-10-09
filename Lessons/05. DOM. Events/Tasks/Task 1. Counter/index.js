const setCounter = () => {
    // Начало
    const el = document.querySelector('.main');
    const button = document.createElement('button');
    button.className = 'btn btn-warning';

    el.appendChild(button);

    let count = 0;
    button.addEventListener('click', function () {
        count++;
        return button.textContent = 'Количество нажатий: ' + count;
    })

    button.textContent = 'Количество нажатий: ' + count;

    // Конец
};

export default setCounter;