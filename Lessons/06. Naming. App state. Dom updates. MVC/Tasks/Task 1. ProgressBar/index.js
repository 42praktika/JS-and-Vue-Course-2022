const updateProgress = (defaultNumber, delta) => {
    let progress = defaultNumber;           // состояние

    const checkBorder = (sign) => {
        if (progress > 100 && sign === '+') {
            progress = 100;
            return progress + '%';
        }
        if (progress < 0 && sign === '-') {
            progress = 0;
            return progress + '%';
        }
        return progress + '%';
    }
    const progressBar = document.querySelector('.progress-bar');
    const increaseBtn = document.querySelector('.button-increase');
    const decreaseBtn = document.querySelector('.button-decrease');
    progressBar.style.width = defaultNumber + '%';
    increaseBtn.addEventListener('click', event => {
        progress += delta;
        progressBar.style.width = checkBorder('+');
    })
    decreaseBtn.addEventListener('click', event => {
        progress -= delta;
        progressBar.style.width = checkBorder('-');
    })
};

export default updateProgress;