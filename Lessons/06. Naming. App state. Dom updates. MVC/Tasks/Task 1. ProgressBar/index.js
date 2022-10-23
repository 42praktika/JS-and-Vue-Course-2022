const updateProgress = (defaultNumber, delta) => {
    // Начало
    const buttonIincrease = document.querySelector('.button-increase');
    const buttonDecrease = document.querySelector('.button-decrease');
    const progressBar = document.querySelector('.progress-bar');
    let progress = defaultNumber;

    const watch = () => {
        progressBar.style.width = progress + '%';
    };


    buttonIincrease.addEventListener('click', () => {
        if ((progress + delta) < 100) {
            progress += delta;
        } else {
            progress = 100;
        }
        watch();
    });

    buttonDecrease.addEventListener('click', () => {
        if ((progress - delta) > 0) {
            progress -= delta;
        } else {
            progress = 0;
        }
        watch();
    });
   watch();

    // Конец
};

export default updateProgress;