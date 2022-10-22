const updateProgress = (defaultNumber, delta) => {
    const progress_bar = document.querySelector('.progress-bar')
    const increase_button = document.querySelector('.button-increase')
    const decrease_button = document.querySelector('.button-decrease')

    let status = defaultNumber
    const render = () => {
        progress_bar.style.width = `${status}%`
    }
    render(progress_bar)

    const validate = (num) => {
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

    increase_button.addEventListener('click', () => {
        status = validate(status + delta)
        render()
    })

    decrease_button.addEventListener('click', () => {
        status = validate(status - delta)
        render()
    })
};

export default updateProgress;