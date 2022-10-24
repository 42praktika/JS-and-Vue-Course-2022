const updateProgress = (defaultNumber, delta) => {

    let state = defaultNumber;
    const progressBar = document.querySelector('.progress-bar');
    const increaseButton = document.querySelector('.button-increase');
    const decreaseButton = document.querySelector('.button-decrease');

    const progressBarResult =() => {
        progressBar.style.width = state + "%";
    };

    increaseButton.addEventListener('click', (event) => {
        if ((state + delta) > 100) {
            state = 100;
        }
        else {
            state += delta;
        }
        progressBarResult();
    });

    decreaseButton.addEventListener('click', (event) => {
        if ((state - delta) < 0) {
            state = 0;
        }
        else {
            state -= delta;
        }
        progressBarResult()
    });
    progressBarResult();
};




export default updateProgress;