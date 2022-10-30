const modalClose = document.querySelectorAll('.modal__close');
const buttonsWidget = document.querySelectorAll('.button--widget');
const modalNext = document.querySelectorAll('.modal__next');

const openModal = (state) => {
    buttonsWidget.forEach((item, index) => {
        item.addEventListener('click', () => {
            state.modals[index].classList.add('modal__active');
            state.activeModals = index;
        })
    })
}

const closeModal = (state) => {
    modalClose.forEach((closeItem) => {
        closeItem.addEventListener('click', (event) => {
            event.preventDefault();
            state.modals[state.activeModals].classList.remove('modal__active');
        })
    })
}

const nextModal = (state) => {
    modalNext.forEach((nextItem) => {
        nextItem.addEventListener('click', (event) => {
            event.preventDefault();
            if (state.activeModals === state.modals.length - 1) {
                state.activeModals = 0;
            } else {
                state.activeModals++;
            }
             state.modals.forEach((stateItem) => {
                stateItem.classList.remove('modal__active');
            })
            state.modals[state.activeModals].classList.add('modal__active');
        })
    })
}

const state = {
    modals: document.querySelectorAll('.modal'),
    activeModals: 0
}
export {openModal, closeModal,nextModal, state};