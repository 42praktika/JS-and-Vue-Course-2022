const updateProgress = (defaultNumber, delta) => {
    // Начало
    const state = {
        progressBarPercent: defaultNumber,
    };
    const buttonIncrease = document.querySelector('.button-increase');
    buttonIncrease.addEventListener('click', () => {
        if (state.progressBarPercent + delta < 100) {
            state.progressBarPercent += delta;
        } else {
            state.progressBarPercent = 100;
        }
        render(state);
    });
    const buttonDecrease = document.querySelector('.button-decrease');
    buttonDecrease.addEventListener('click', () => {
        if (state.progressBarPercent - delta > 0) {
            state.progressBarPercent -= delta;
        } else {
            state.progressBarPercent = 0;
        }
        render(state);
    })
    render(state);
    // Конец
};
const render = (state) => {
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = `${state.progressBarPercent}%`;
}
export default updateProgress;