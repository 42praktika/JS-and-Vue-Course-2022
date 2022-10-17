const setCounter = () => {
    // Начало
    let number = 0;

    const countText = 'Количество нажатий:';
    const counter = document.querySelector('.main');
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-warning');
    button.textContent = `${countText} ${number}`;

    button.addEventListener('click' , () => {
        number += 1;
        button.textContent = `${countText} ${number}`;
    })

    counter.append(button);
    // Конец
};

export default setCounter;