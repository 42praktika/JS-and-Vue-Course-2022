import WatchJS from './helpers/melanke-watchjs.js';
import MODAL_WINDOWS from './index.js';

const {watch} = WatchJS;

const watchAppState = (state) => {
    watch(state, 'openedModalName', () => {
        if (state.isModalsOpen) {
            MODAL_WINDOWS[state.previousModalName].domElement.style.display = 'none';
            MODAL_WINDOWS[state.openedModalName].domElement.style.display = 'block';
            MODAL_WINDOWS[state.openedModalName].function();
        } else {
            MODAL_WINDOWS[state.previousModalName].domElement.style.display = 'none';
        }
    });
};

export default watchAppState;