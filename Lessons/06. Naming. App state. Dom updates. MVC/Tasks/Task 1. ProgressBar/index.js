const updateProgress = (defaultNumber, delta) => {
    // Начало
    let number = defaultNumber;
    const increaseButton = document.querySelector('.button-increase');
    const decreaseButton = document.querySelector('.button-decrease');

    const progressBar = document.querySelector('.progress-bar');
    const setWidth = (number) => {
        progressBar.setAttribute('style', `width: ${number}%`);
    };
    setWidth(number);

    increaseButton.addEventListener('click', () => {
        number = Math.min(number + delta, 100);
        setWidth(number);
    });
    decreaseButton.addEventListener('click', () => {
        number = Math.max(number - delta, 0);
        setWidth(number);
    });
    // Конец
};

module.exports = updateProgress;