import watchState from './watchers.js';

const canClose = (parent, child) => {
    if (child === parent) {
        return false
    }
    let node = child.parentNode;
    while (node != null) {
        if (node === parent) {
            return false;
        }
        node = node.parentNode;
    }
    return true;
}

const app = () => {
    const state = {
        status: 'closed',
        currentWindow: null
    };

    const modalWindow = document.querySelector('.modal');
    const buttons = Array.from(document.querySelectorAll('.button-widget'));
    const closeButton = document.querySelector('.close-button');
    const nextButton = document.querySelector('.next-button');

    document.body.addEventListener('click', (event) => {
        if (buttons.includes(event.target)) {
            state.status = 'loading';
            state.currentWindow = document.querySelector(`.modal-container[data-type=${event.target.dataset.type}]`);
        }
        else if (event.target === nextButton) {
            state.currentWindow = state.currentWindow.nextSibling;
            if (state.currentWindow === null) {
                state.currentWindow = document.querySelector('.modal-container');
            }
        }
        else if (event.target === closeButton || canClose(modalWindow, event.target)) {
            state.status = 'closed';
        }
    });

    watchState(state);
}

export default app;