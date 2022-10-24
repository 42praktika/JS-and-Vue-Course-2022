const render = (state) => {
    const classProgressBar = document.querySelector('.progress-bar');
    classProgressBar.style.width = state.percent + '%';
}

const updateProgress = (defaultNumber, delta) => {
    const state = {
        percent: defaultNumber,
    };

    const buttonNext = document.querySelector('.button-increase');
    buttonNext.addEventListener('click', () => {
        if (state.percent + delta < 100) {
            state.percent += delta;
        } else {
            state.percent = 100;
        }
        render(state);
    });

    const buttonBehind = document.querySelector('.button-decrease');
    buttonBehind.addEventListener('click', () => {
        if (state.percent - delta > 0) {
            state.percent -= delta;
        } else {
            state.percent = 0;
        }
        render(state);
    })


    render(state);
}

export default updateProgress;