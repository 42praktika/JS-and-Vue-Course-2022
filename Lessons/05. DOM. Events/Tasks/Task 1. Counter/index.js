const setCounter = () => {
    // Начало
    const countText = 'Количество нажатий: ';
    const counter = document.querySelector('.main');
    const button = document.createElement('button');
    button.textContent = countText + '0';

    button.addEventListener('click', (event) => {
        const currentCount = event.target.textContent.split(': ')[1];
        const newCount = Number(currentCount) + 1;
        event.target.textContent = countText + newCount;
    });

    counter.append(button);
    // Конец
};

module.exports = setCounter;