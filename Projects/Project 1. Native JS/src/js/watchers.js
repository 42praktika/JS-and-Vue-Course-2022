import WatchJS from 'melanke-watchjs';

const { watch } = WatchJS;

const watchState = (state) => {
    const modalWindow = document.querySelector('.modal');
    const modalContainers = document.querySelectorAll('.modal-container');

    watch(state, 'status', () => {
        switch (state.status) {
            case 'loading':
                modalWindow.style.display = 'block';
                break
            case 'closed':
                modalWindow.style.display = 'none'
                break
        }
    });

    watch(state, 'currentWindow', () => {
        state.currentWindow.style.display = 'block';
        for (let i = 0; i < modalContainers.length; i++) {
            if (modalContainers[i] !== state.currentWindow) {
                modalContainers[i].style.display = 'none';
            }
        }
    });
}

export default watchState;