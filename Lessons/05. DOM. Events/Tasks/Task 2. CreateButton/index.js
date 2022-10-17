const createButton = () => {

    const elem = document.querySelector('.button-container');
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Кнопка';
    elem.append(button);
    button.addEventListener("click",() => {
        const newElem = document.querySelector('.description');
        const span = document.createElement('span');
        span.textContent = "Текст вставлен!";
        newElem.append(span);
    });
};

export default createButton;