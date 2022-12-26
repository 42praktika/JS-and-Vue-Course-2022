const updateProgress = (defaultNumber, delta) => {
    let progressCount = defaultNumber;

    const progressBar = document.querySelector('div.progress-bar');
    const increaseButton = document.querySelector('button.button-increase');
    const decreaseButton = document.querySelector('button.button-decrease');

    increaseButton.addEventListener('click', (event) => {
        if ((progressCount + delta) > 100) {
            progressCount = 100;
        } else {
            progressCount += delta;
        }

        progressBar.style = `width: ${progressCount}%`;
    })

    decreaseButton.addEventListener('click', (event) => {
        if ((progressCount - delta) < 0) {
            progressCount = 0;
        } else {
            progressCount -= delta;
        }

        progressBar.style = `width: ${progressCount}%`;
    })

    progressBar.style = `width: ${progressCount}%`;
};

export default updateProgress;