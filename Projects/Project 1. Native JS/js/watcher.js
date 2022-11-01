import WatchJS from './../helpers/melanke-watchjs';

const { watch } = WatchJS;

const watchState = (modalWindows) => {

    watch(modalWindows, 'currentIndex', () => {
        modalWindows.list[modalWindows.currentIndex].style.display = 'flex';
        modalWindows.list[modalWindows.prevIndex].style.display = 'none';
    });
};

export default watchState;