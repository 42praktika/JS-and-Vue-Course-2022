const updateProgress = (defaultNumber, delta) => {
    // Начало
    const progressBar = document.querySelector('.progress-bar');
    const increaseButton = document.querySelector('.button-increase');
    const decreaseButton = document.querySelector('.button-decrease');

    let status = defaultNumber
    const render = () => {
        progressBar.style.width = `${status}%`;
    }

    render(progressBar);

    const validate = (number) => {
        if (number > 100) {
            return 100
        } else if (number < 0) {
            return 0
        } else {
            return number
        }
    }

    increaseButton.addEventListener('click', () => {
        status = validate(status + delta)
        render()
    });

    decreaseButton.addEventListener('click', () => {
        status = validate(status - delta)
        render()
    });
    // Конец
};

export default updateProgress;