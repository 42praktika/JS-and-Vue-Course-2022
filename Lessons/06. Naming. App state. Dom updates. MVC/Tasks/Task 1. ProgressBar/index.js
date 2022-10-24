const updateProgress = (defaultNumber, delta) => {
    // Начало
    let progressBar = document.querySelector(".progress-bar");
    const state  = {percent : defaultNumber,};
    progressBar.style.width = state.percent + '%';
    const increasingProgress = document.querySelector('.button-increase');
    const decreasingProgress = document.querySelector('.button-decrease');

    increasingProgress.addEventListener('click', () => {
        if ((state.percent + delta) <= 100) {
            state.percent += delta;
        }
        else {
            state.percent = 100;
        }
        progressBar.style.width = state.percent + '%';
    });

    decreasingProgress.addEventListener('click',() => {
        if ((state.percent - delta) >= 0) {
            state.percent -= delta;
        }
        else {
            state.percent = 0;
        }
        progressBar.style.width = state.percent + '%';
    });
    // Конец
};

export default updateProgress;