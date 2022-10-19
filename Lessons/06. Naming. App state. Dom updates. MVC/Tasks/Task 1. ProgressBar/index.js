const updateProgress = (defaultNumber, delta) => {
    // Начало
    const state = {
        default: defaultNumber,
        number: delta
    }
    const buttonUp = document.querySelector('.button-increase');
    const buttonDown = document.querySelector('.button-decrease')

    const progressBar = document.querySelector('.progress-bar');

    progressBar.setAttribute("aria-valuemin", '0');
    progressBar.setAttribute("aria-valuemax", '100');

    let value= Number(state.default);

    progressBar.setAttribute("aria-valuenow", value);

    buttonUp.addEventListener('click',()=>{
    value += Number(state.number);
    progressBar.style.width = value + '%'
})
    buttonDown.addEventListener('click',()=> {
        value -= Number(state.number);
        progressBar.style.width = value + '%'
    })

    // Конец
};


export default updateProgress;