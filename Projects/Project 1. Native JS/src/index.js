const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const nextModalButtons = document.querySelectorAll('[data-next-button]');
const overlay = document.getElementById('overlay');

let value = '';

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        value = button.dataset.modalTarget;
        openModal(modal);
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    })
})

nextModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        let newModalText = '';
        const modal = document.querySelector(value);
        console.log(value)
        if (value === '#modal1') {
            newModalText = '#modal2';
            value = newModalText;
        } else if (value === '#modal2') {
            newModalText = '#modal3';
            value = newModalText;
        } else if (value === '#modal3') {
            newModalText = '#modal1';
            value = newModalText;
        }
        const newModal = document.querySelector(newModalText);
        nextModal(modal, newModal);
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

function nextModal(modal, newModal) {
    closeModal(modal);
    openModal(newModal);
}