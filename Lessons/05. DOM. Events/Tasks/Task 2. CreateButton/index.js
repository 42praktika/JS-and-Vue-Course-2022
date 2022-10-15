const createButton = () => {
    const container = document.querySelector('.button-container')
    const button = document.createElement("button")
    button.className = "btn btn-primary"
    container.appendChild(button)
    button.textContent='Кнопка'
    button.addEventListener('click', (event) => {
        const description = document.querySelector('.description')
        const span = document.createElement('span')
        description.append(span);
        span.textContent='Текст вставлен!'
    })
};

export default createButton;