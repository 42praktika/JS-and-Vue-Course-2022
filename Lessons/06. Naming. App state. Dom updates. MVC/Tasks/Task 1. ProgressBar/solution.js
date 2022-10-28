const setWidth = (number) => {
    const progressBar = document.querySelector('.progress-bar');
    progressBar.setAttribute('style', `width: ${number}%`);
};

const updateProgress = (defaultNumber, delta) => {
    // Выделяем в приложении состояние
    let number = defaultNumber;

    const increaseButton = document.querySelector('.button-increase');
    const decreaseButton = document.querySelector('.button-decrease');
    increaseButton.addEventListener('click', () => {
        number = Math.min(number + delta, 100);
        setWidth(number);
    });
    decreaseButton.addEventListener('click', () => {
        number = Math.max(number - delta, 0);
        setWidth(number);
    });

    setWidth(number);
};

export default updateProgress;