// Инициализируем DOM
const initDOM = () => {
    const counter = document.querySelector('.main');
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-warning');
    button.textContent = 'Количество нажатий: 0';
    counter.append(button);
};

export default initDOM;