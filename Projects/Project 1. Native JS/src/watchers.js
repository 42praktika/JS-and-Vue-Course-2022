import WatchJS from 'melanke-watchjs';

const { watch } = WatchJS;

export const watchState = (state) => {
    watch(state, 'currentWindow', () => {
        const modals = document.querySelectorAll('.modal');
        state.currentWindow.style.display = 'block';
        for (let i = 0; i < modals.length; i++) {
            if (modals[i] !== state.currentWindow) {
                modals[i].style.display = 'none';
            }
        }
    });
};

export const watchStateCurrentPicture=(stateCurrentPicture)=>{
    watch(stateCurrentPicture,'currentPicture',()=>{
        document.getElementById('imgBreakingBad').setAttribute('src', stateCurrentPicture.currentPicture);
    })
}

export const watchStateQuestion=(stateQuestion)=>{
    watch(stateQuestion,'question',()=>{
        document.querySelector('.QuestionH3').textContent = `Question: ${stateQuestion.question}`
    })
}
export const watchStateAnswer=(stateAnswer)=>{
    watch(stateAnswer,'answer',()=>{
        document.querySelector('.AnswerH3').textContent = `Answer: ${stateAnswer.answer}`;
    })
}
export const watchStatePharse=(stateCurrentPhrase)=>{
    watch(stateCurrentPhrase,'currentPhrase',()=>{
        document.querySelector('.Phrase').textContent = stateCurrentPhrase.currentPhrase;
    })
}
