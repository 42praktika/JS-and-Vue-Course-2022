import { watchState, watchStateCurrentPicture,watchStateQuestion,watchStateAnswer, watchStatePharse } from './watchers.js';




const URL_BREAKING_BAD = 'https://breakingbadapi.com/api/characters';
const URL_RIDDLES = 'https://jservice.io/api/clues';
const URL_PHRASE = 'https://favqs.com/api/qotd';

const app = () => {

    const stateWindow={
        currentWindow: null,
    }
    const stateQuestion={
        question: ''
    }
    const stateAnswer={
        answer: ''
    }
    const stateCurrentPicture={
        currentPicture:
    }
    const stateCurrentPhrase={
        currentPhrase: '',
    }

    const mainButtons = document.querySelectorAll('.button');
    const buttonGlobalCLOSE = document.querySelector('.CLOSE');
    const buttonGlobalNext = document.querySelector('.NEXT');
    const optionsBreakingBad = document.querySelectorAll('.optionBreakingBad');
    const optionRiddlesQuestions = document.querySelectorAll('.optionRiddlesQuestion');
    const buttonShowAnswer = document.querySelector('.ShowAnswer');
    const buttonAddAnotherPhrase = document.querySelector('.AddPhrase');

    for (let i = 0; i < mainButtons.length; i++) {
        mainButtons[i].addEventListener('click', () => {
            stateWindow.currentWindow = document.querySelectorAll('.modal')[i];
        });
    }

    buttonGlobalCLOSE.addEventListener('click', () => {
        if (stateWindow.currentWindow === null) {
            alert('Нажмите на кнопку :)');
        } else {
            stateWindow.currentWindow.style.display = 'none';
            stateWindow.currentWindow = null;
        }
    });

    buttonGlobalNext.addEventListener('click', () => {
        if (stateWindow.currentWindow === null) {
            alert('Нажмите на кнопку :)');
        }
        if (stateWindow.currentWindow === document.querySelectorAll('.modal')[2]) {
            stateWindow.currentWindow = document.querySelector('.modal');
        } else {
            stateWindow.currentWindow = stateWindow.currentWindow.nextSibling;
        }
    });

    for (let i = 0; i < optionsBreakingBad.length; i++) {
        optionsBreakingBad[i].addEventListener('click', async () => {
            try {
                const response = await fetch(URL_BREAKING_BAD);
                const responseData = await response.json();
                stateCurrentPicture.currentPicture = responseData[i].img;
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
                stateQuestion.question = responseData[i].question;
                stateAnswer.answer = 'Нажмите на кнопку "Показать Ответ"';
                buttonShowAnswer.addEventListener('click', () => {
                    stateAnswer.answer = responseData[i].answer;
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
            stateCurrentPhrase.currentPhrase = responseData.quote.body;
        } catch (error) {
            alert(error);
        }
    });
    watchState(stateWindow)
    watchStateCurrentPicture(stateCurrentPicture)
    watchStateQuestion(stateQuestion)
    watchStateAnswer(stateAnswer)
    watchStatePharse(stateCurrentPhrase)

};
export default app;