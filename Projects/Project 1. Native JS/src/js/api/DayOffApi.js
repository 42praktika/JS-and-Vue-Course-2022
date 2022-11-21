export const getDayOffAPI = () => {
    const main = document.querySelector('.main');
    const input = document.createElement('input');
    input.classList.add('input');
    input.placeholder = 'Enter date: YYYYMMDD';

    main.append(input);

    let result = '';

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Enter';
    submitButton.classList.add('submitBtn');

    main.append(submitButton);

    submitButton.addEventListener('click', () => {
        const span = document.createElement('span');
        const spanText = input.value;

        const url = `https://isdayoff.ru/${spanText}`;

        main.append(span);

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                result = `${data}`;
                console.log(data);
            }).then(renderResult)
            .catch(() => {
                throw new Error('smth went wrong');
            });
    });

    const renderResult = () => {
        const div = document.createElement('div');
        div.classList.add('smallWindow');
        if (result === 0) {
            div.textContent = 'This day is working';
        } else if (result === 1) {
            div.textContent = 'This day is a holiday';
        } else throw new Error('smth went wrong');

        main.append(div);
    };
};