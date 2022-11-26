export const getDayOffAPI = () => {
    const modal__container = document.querySelector('.modal__container');
    const activeWindow = document.createElement('div');
    const input = document.createElement('input');
    activeWindow.className = 'activeWindow';
    activeWindow.classList.add('apiWindow');
    input.classList.add('input');
    input.placeholder = 'Enter date: YYYYMMDD';

    activeWindow.append(input);
    modal__container.append(activeWindow);

    const alertText = document.createElement('span');
    alertText.textContent = 'Enter a date in the range from 2017 to 2025';
    alertText.classList.add('alertInput');

    activeWindow.append(alertText);

    let result = '';

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Enter';
    submitButton.classList.add('submitBtn');

    activeWindow.append(submitButton);

    submitButton.addEventListener('click', () => {
        const span = document.createElement('span');
        const spanText = input.value;

        const url = `https://isdayoff.ru/${spanText}`;

        activeWindow.append(span);

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                result = data;
            }).then(renderResult)
            .catch(() => {
                throw new Error('smth went wrong');
            });
    });

    const renderResult = () => {
        const div = document.createElement('div');
        div.classList.add('smallWindow');

        const allDivs = document.querySelectorAll('.smallWindow');
        allDivs.forEach((elem) => {
            elem.textContent = '';
        });

        if (result === 0) {
            div.textContent = 'This day is working';
        } else if (result === 1) {
            div.textContent = 'This day is a holiday';
        } else throw new Error('smth went wrong');

        activeWindow.append(div);
    };
};