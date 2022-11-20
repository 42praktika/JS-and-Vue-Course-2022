import WatchJS from 'melanke-watchjs';

const { watch } = WatchJS;

const watchState = (state) => {
    watch(state, () => {
        const modals = document.querySelectorAll('.modal');
        state.currentWindow.style.display = 'block';
        for (let i = 0; i < modals.length; i++) {
            if (modals[i] !== state.currentWindow) {
                modals[i].style.display = 'none';
            }
        }
    });

    watch(state, () => {
        document.getElementById('imgBreakingBad').setAttribute('src', state.currentPicture);
    });

    watch(state, () => {
        document.querySelector('.QuestionH3').textContent = `Question: ${state.Question}`;
        document.querySelector('.AnswerH3').textContent = `Answer: ${state.Answer}`;
    });

    watch(state, () => {
        document.querySelector('.Phrase').textContent = state.currentPhrase;
    });
};
export default watchState;
