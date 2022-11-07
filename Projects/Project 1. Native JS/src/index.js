
import {buttons, modals, modalType} from "./js/const";
import state from "./js/state";



const closeModal = () => {
    state.openedModalType = modalType.NONE;
}

const renderButtons = () => {
    const buttonsContainer = document.querySelector('.buttons-container');

    buttons.forEach((item) => {
        const button = document.createElement('button');

        button.textContent = item.text
        button.dataset.type = item.type

        button.addEventListener('click', (event) => {
            state.openedModalType = item.type

            event.stopPropagation()
        })

        buttonsContainer.append(button)
    })
};

const renderModals = () => {
    const app = document.querySelector('.app');

    modals.forEach((item) => {
        const modal = document.createElement('div');
        const prevButton = document.createElement('button');
        const nextButton = document.createElement('button');
        const closeButton = document.createElement('button');

        prevButton.textContent = 'Назад';
        prevButton.addEventListener('click', (event) => {
            const currentOpenedModalIndex = modals
                .findIndex((item) => item.type === state.openedModalType);

            if (currentOpenedModalIndex === 0) {
                state.openedModalType = modals[modals.length - 1].type;
            } else {
                state.openedModalType = modals[currentOpenedModalIndex - 1].type;
            }

            event.stopPropagation()
        });

        nextButton.textContent = 'Вперед';
        nextButton.addEventListener('click', (event) => {
            const currentOpenedModalIndex = modals
                .findIndex((item) => item.type === state.openedModalType);

            if (currentOpenedModalIndex === modals.length - 1) {
                state.openedModalType = modals[0].type
            } else {
                state.openedModalType = modals[currentOpenedModalIndex + 1].type
            }

            event.stopPropagation();
        });

        closeButton.textContent = 'Закрыть';
        closeButton.addEventListener('click', (event) => {
            closeModal()

            event.stopPropagation()
        });

        modal.dataset.type = item.type
        modal.classList.add('modal')
        modal.textContent = item.text

        modal.append(prevButton)
        modal.append(nextButton)
        modal.append(closeButton)

        app.append(modal)
    });
};

document.addEventListener('click', closeModal)

console.log("я тупая")

renderButtons()
renderModals()




