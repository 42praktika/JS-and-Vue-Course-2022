const setCounter = () => {
    // Начало
    const eventFunc = (event) => {
        const currentCount = event.target.textContent.split(': ')[1];
        const newCount = Number(currentCount) + 1;
        event.target.textContent = textCount + newCount;
    }

    const textCount = "Количество нажатий: ";
    const counter = document.querySelector('.main');
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-warning');
    button.insertAdjacentHTML('beforeend', textCount + '0');
    button.addEventListener('click', eventFunc);
    counter.append(button);

    // Конец
};
export default setCounter;