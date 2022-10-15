const updateProgress = (defaultNumber, delta) => {
    // Начало
    const state  = {
        percent : defaultNumber,
    };
    let progressBar = document.querySelector(".progress-bar");
    progressBar.style.width = state.percent + '%';

    const increase = document.querySelector('.button-increase');

    increase.addEventListener('click', () => {
        if ((state.percent + delta) < 100) {
            state.percent += delta;
        } else {
            state.percent = 100;
        }
        progressBar.style.width = state.percent + '%';
    });

    const decrease = document.querySelector('.button-decrease');
    decrease.addEventListener('click',() => {
        if ((state.percent - delta) > 0) {
            state.percent -= delta;
        } else {
            state.percent = 0;
        }
        progressBar.style.width = state.percent + '%';
    });
    // Конец
};

export default updateProgress;