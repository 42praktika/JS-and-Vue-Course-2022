import './index.css'
import "./index.html"

const modal = document.getElementsByClassName("modal_window")
const Mybutton = document.getElementsByClassName("button")
const buttonClose = document.getElementsByClassName("btn-close")
const buttonNext = document.getElementsByClassName("btn-next")

const state = {
    modalWindow: document.querySelectorAll('.modal_window'),
    modalWindowActive : 0,
}

const addEventListener = (state) => {
    for (let i = 0; i < Mybutton.length; i++) {
        Mybutton[i].addEventListener('click', function () {
            openModalWindow()
            state.modalWindowActive = i
        })
    }
    buttonNext.forEach(function(event) {
        event.addEventListener('click', () => {
            if (state.modalWindowActive === 2) {
                state.modalWindowActive = 0
            }
            else {
                state.modalWindowActive += 1
            }

            state.modalWindow.forEach((event) => {
                event.style.display = "none"
        })
        })
        state.modalWindow[state.modalWindowActive].style.display = "block"
    });

};



buttonClose.forEach((event) => {
    event.addEventListener('click', () => {
        closeModalWindow();
    })
})

const openModalWindow = () => {
    state.style.display = "block";
}

const closeModalWindow = () => {
    state.modalWindow[state.modalWindowActive].style.display = "none"
}

addEventListener(state)




