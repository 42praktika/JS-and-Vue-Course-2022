const prostoObject = {
    info1: {                  //НАЗВАНИЯ ПОТОМ СМЕНЮ. И университет
        dataName: "info1"
    },
    info2: {
        dataName: "info2"
    },
    info3: {
        dataName: "info3"
    }
}

const btnContainer = document.querySelector('.buttons');
btnContainer.addEventListener('click', event => {
    const buttons = document.querySelector('.buttons')
    buttons.style.display = 'none';
    const modal = document.querySelector('.modal-' + event.target.dataset.type);
    modal.style.display = 'block';
})