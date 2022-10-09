const createButton = () => {
    // Начало
    const el = document.querySelector('.button-container');
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.innerHTML = 'Кнопка'
    el.appendChild(button);

    const changedEl = document.querySelector('.description');
    const span = document.createElement('span');
    button.addEventListener('click', function (){
        span.innerHTML='Текст вставлен!';
        changedEl.appendChild(span);
    });
    // Конец
};

export default createButton;