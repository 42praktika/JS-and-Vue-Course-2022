const initDOM = () => {
    const app = document.querySelector('.app');
    const buttonContainer = document.querySelector('.buttons');
    const button1 = document.createElement('button');
    button1.textContent = 'Кнопка 1';
    button1.dataset.type = 'button1';
    const button2 = document.createElement('button');
    button2.textContent = 'Кнопка 2';
    button2.dataset.type = 'button2';
    const button3 = document.createElement('button');
    button3.textContent = 'Кнопка 3';
    button3.dataset.type = 'button3';
    const buttons = [button1, button2, button3];
    buttons.forEach((element) => {
        element.className = 'button-widget';
        buttonContainer.append(element);
    });
    const modalWindow = document.createElement('div');
    modalWindow.className = 'modal';
    modalWindow.style.display = 'none';
    app.append(modalWindow);
    const nextButton = document.createElement('button');
    nextButton.className = 'next-button';
    modalWindow.append(nextButton);
    const closeButton = document.createElement('button');
    closeButton.className = 'close-button';
    modalWindow.append(closeButton);
    const modalContainer1 = document.createElement('div');
    modalContainer1.className = 'modal-container';
    modalContainer1.dataset.type = 'button1';
    modalContainer1.textContent = 'Hello world 1';
    modalWindow.append(modalContainer1);
    const modalContainer2 = document.createElement('div');
    modalContainer2.className = 'modal-container';
    modalContainer2.dataset.type = 'button2';
    modalContainer2.textContent = 'Hello world 2';
    modalWindow.append(modalContainer2);
    const modalContainer3 = document.createElement('div');
    modalContainer3.className = 'modal-container';
    modalContainer3.dataset.type = 'button3';
    modalContainer3.textContent = 'Hello world 3';
    modalWindow.append(modalContainer3);
}

export default initDOM;