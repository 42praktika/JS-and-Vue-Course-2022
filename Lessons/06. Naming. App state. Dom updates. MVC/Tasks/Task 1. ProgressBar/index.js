const updateProgress = (defaultNumber, delta) => {
    const progress_bar = document.querySelector('.progress-bar')
    const increase_button = document.querySelector('.button-increase')
    const decrease_button = document.querySelector('.button-decrease')

    let state = defaultNumber
    const render = () => {
        progress_bar.style.width = `${state}%`
    }
    render(progress_bar)

    increase_button.addEventListener('click', () => {
        state = check(state + delta)
        render()
    })

    decrease_button.addEventListener('click', () => {
        state = check(state - delta)
        render()
    })

    const check = (num) => {
        if (num > 100) {
            return 100
        }
        else if (num < 0) {
            return 0
        }
        else {
            return num
        }
    }
};

export default updateProgress;