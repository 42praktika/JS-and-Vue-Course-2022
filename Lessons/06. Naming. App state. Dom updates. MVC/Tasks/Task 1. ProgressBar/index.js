const updateProgress = (defaultNumber, delta) => {
    // Начало
    const state = {
        defaultWidth: defaultNumber,
        value: delta
    }

    const increaseButton = document.querySelector('.button-increase');
    const decreaseButton = document.querySelector('.button-decrease');

    const progressBar = document.querySelector('.progress-bar');
    progressBar.setAttribute('aria-valuemin', '0');
    progressBar.setAttribute('aria-valuemax', '100');
    progressBar.setAttribute('role', 'progressbar');
    progressBar.setAttribute('style', `width: ${state.defaultWidth}%`);

    const setWidth = (num) => {
        progressBar.setAttribute('style', `width: ${num}%`);
    }

    increaseButton.addEventListener('click', () => {
        let newWidth = state.defaultWidth + state.value;
        if (state.defaultWidth <= 100 && newWidth <= 100) {
            state.defaultWidth = newWidth;
        } else if (state.defaultWidth <= 100 && newWidth > 100) {
            state.defaultWidth = 100;
        }
        setWidth(state.defaultWidth);
    })

    decreaseButton.addEventListener('click', () => {
        let newWidth = state.defaultWidth - state.value;
        if (state.defaultWidth >= 0 && newWidth >= 0) {
            state.defaultWidth -= state.value;
        } else if (state.defaultWidth >= 0 && newWidth < 0) {
            state.defaultWidth = 0;
        }
        setWidth(state.defaultWidth);
    })
    // Конец
};

export default updateProgress;