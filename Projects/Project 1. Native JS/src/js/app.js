import watchState from './watchers.js';
import { STATE as state, MODALS as modals } from './consts';
import { updateData, setEventListeners } from './controller/widgetController';

// eslint-disable-next-line max-len
const getNextWindowIndex = () => (state.currentWindowIndex + 1 === modals.length ? 0 : state.currentWindowIndex + 1);

const app = () => {
    const closeButton = document.querySelector('.close-button');
    const nextButton = document.querySelector('.next-button');

    document.body.addEventListener('click', (event) => {
        if (event.target.className === 'button-widget' && modals.find((item) => item.type === event.target.dataset.type)) {
            // eslint-disable-next-line max-len
            state.currentWindowIndex = modals.findIndex((item) => item.type === event.target.dataset.type);
            updateData(state);
        } else if (event.target === nextButton) {
            state.currentWindowIndex = getNextWindowIndex();
            updateData(state);
        } else if (event.target === closeButton || !event.target.closest('.modal')) {
            state.status = 'closed';
        }
    });

    setEventListeners();
    watchState(state);
};

export default app;
