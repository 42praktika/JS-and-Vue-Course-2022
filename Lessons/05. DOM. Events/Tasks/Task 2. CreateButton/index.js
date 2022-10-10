const createButton = () => {
    // Начало
const container = document.querySelector('.button-container');
    const button = document.createElement('button');
    button.className = 'btn btn-primary'
    container.prepend(button);
    button.textContent='Кнопка'
    button.addEventListener('click',function (){
        const desc = document.querySelector('.description');
        const span = document.createElement('span');
        desc.append(span);
        span.textContent='Текст вставлен!'
    })

    // Конец
};

export default createButton;