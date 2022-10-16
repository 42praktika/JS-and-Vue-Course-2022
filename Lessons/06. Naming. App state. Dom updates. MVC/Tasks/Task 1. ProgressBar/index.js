const updateProgress = (defaultNumber, delta) => {
    // Начало
    const stateProgressBar = {
        progress: defaultNumber,
        progressChange: delta,
    }

    const mainElement = document.querySelector('.progress-bar');
    const buttonIncrease = document.querySelector('.button-increase');
    const buttonDecrease = document.querySelector('.button-decrease');

    const update = () => {
        mainElement.setAttribute('style', 'width: ' + stateProgressBar.progress.toString() + '%');
    }

    buttonIncrease.addEventListener('click', () => {
        if (stateProgressBar.progress + stateProgressBar.progressChange <= 100) {
            stateProgressBar.progress += stateProgressBar.progressChange;
        } else {
            stateProgressBar.progress = 100;
        }
        update(stateProgressBar);
    });

    buttonDecrease.addEventListener('click', () => {
        if (stateProgressBar.progress - stateProgressBar.progressChange >= 0) {
            stateProgressBar.progress -= stateProgressBar.progressChange;
        } else {
            stateProgressBar.progress = 0;
        }
        update(stateProgressBar);
    });

    update(stateProgressBar);
    // Конец
};

export default updateProgress;
