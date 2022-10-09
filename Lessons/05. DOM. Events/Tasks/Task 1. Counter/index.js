const setCounter = () => {
    // Начало
    const el = document.querySelector('.main');
    const button = document.createElement('button');
    button.className = 'btn btn-warning';

    el.appendChild(button);

    let count = 0;
    button.addEventListener('click', function (){
        count++;
        return button.innerHTML = 'Количество нажатий: ' + count;
    });

    button.innerHTML = 'Количество нажатий: ' + count;

    // Конец
};

export default setCounter;