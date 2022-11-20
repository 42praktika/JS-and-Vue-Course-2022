import watchState from './watchers.js';

const URL_BREAKING_BAD = 'https://breakingbadapi.com/api/characters';
const URL_RIDDLES = 'https://jservice.io/api/clues';
const URL_PHRASE = 'https://favqs.com/api/qotd';

const app = () => {
    const state = {
        currentWindow: null,
        Question: '',
        Answer: '',
        currentPicture: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
        currentPhrase: 'Нажмите на кнопку чтобы поменять на фразу',
    };

    const mainButtons = document.querySelectorAll('.button');
    const buttonGlobalCLOSE = document.querySelector('.CLOSE');
    const buttonGlobalNext = document.querySelector('.NEXT');
    const optionsBreakingBad = document.querySelectorAll('.optionBreakingBad');
    const optionRiddlesQuestions = document.querySelectorAll('.optionRiddlesQuestion');
    const buttonShowAnswer = document.querySelector('.ShowAnswer');
    const buttonAddAnotherPhrase = document.querySelector('.AddPhrase');

    for (let i = 0; i < mainButtons.length; i++) {
        mainButtons[i].addEventListener('click', () => {
            state.currentWindow = document.querySelectorAll('.modal')[i];
        });
    }

    buttonGlobalCLOSE.addEventListener('click', () => {
        if (state.currentWindow === null) {
            alert('Нажмите на кнопку :)');
        } else {
            state.currentWindow.style.display = 'none';
            state.currentWindow = null;
        }
    });

    buttonGlobalNext.addEventListener('click', () => {
        if (state.currentWindow === null) {
            alert('Нажмите на кнопку :)');
        }
        if (state.currentWindow === document.querySelectorAll('.modal')[2]) {
            state.currentWindow = document.querySelector('.modal');
        } else {
            state.currentWindow = state.currentWindow.nextSibling;
        }
    });

    for (let i = 0; i < optionsBreakingBad.length; i++) {
        optionsBreakingBad[i].addEventListener('click', async () => {
            try {
                const response = await fetch(URL_BREAKING_BAD);
                const responseData = await response.json();
                state.currentPicture = responseData[i].img;
            } catch (error) {
                alert(error);
            }
        });
    }

    for (let i = 0; i < optionRiddlesQuestions.length; i++) {
        optionRiddlesQuestions[i].addEventListener('click', async () => {
            try {
                const response = await fetch(URL_RIDDLES);
                const responseData = await response.json();
                state.Question = responseData[i].question;
                state.Answer = 'Нажмите на кнопку "Показать Ответ"';
                buttonShowAnswer.addEventListener('click', () => {
                    state.Answer = responseData[i].answer;
                });
            } catch (error) {
                alert(error);
            }
        });
    }

    buttonAddAnotherPhrase.addEventListener('click', async () => {
        try {
            const response = await fetch(URL_PHRASE);
            const responseData = await response.json();
            state.currentPhrase = responseData.quote.body;
        } catch (error) {
            alert(error);
        }
    });

    watchState(state);
};
export default app;
