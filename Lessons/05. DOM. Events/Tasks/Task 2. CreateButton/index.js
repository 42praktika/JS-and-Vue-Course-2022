const createButton = () => {
    // Начало
    const el = document.querySelector('.button-container');
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Кнопка'
    el.appendChild(button);

    const changedEl = document.querySelector('.description');
    const span = document.createElement('span');
    button.addEventListener('click', function (){
        span.textContent='Текст вставлен!';
        changedEl.appendChild(span);
    });
    // Конец
};

export default createButton;