import {
    watchState,
    watchStateCurrentPicture,
    watchStateQuestion,
    watchStateAnswer,
    watchStatePharse
} from './watchers.js';


const URL_BREAKING_BAD = 'https://breakingbadapi.com/api/characters';
const URL_RIDDLES = 'https://jservice.io/api/clues';
const URL_PHRASE = 'https://favqs.com/api/qotd';

const app = () => {

    const stateWindow = {
        currentWindow: null,
    }
    const stateQuestion = {
        question: ''
    }
    const stateAnswer = {
        answer: ''
    }
    const stateCurrentPicture = {
        currentPicture: null
    }
    const stateCurrentPhrase = {
        currentPhrase: '',
    }

    const appClass = document.querySelector('.app');
    const mainButtons = document.querySelectorAll('.button');
    const buttonGlobalCLOSE = document.querySelector('.CLOSE');
    const buttonGlobalNext = document.querySelector('.NEXT');
    const optionsBreakingBad = document.querySelectorAll('.optionBreakingBad');
    const optionRiddlesQuestions = document.querySelectorAll('.optionRiddlesQuestion');
    const buttonShowAnswer = document.querySelector('.ShowAnswer');
    const buttonAddAnotherPhrase = document.querySelector('.AddPhrase');
    const mask=document.querySelector('.mask')

    const LoadingLoader=()=>{
        appClass.append(mask)
        window.addEventListener('load',()=>{
            mask.classList.add('hide');
        })
    }

    const RemoveLoader=()=>{
        setTimeout(()=>{
            mask.remove();
        },0)
    }

    const AddLoader=()=>{
        appClass.append(mask)
    }

    mask.remove()




    for (let i = 0; i < mainButtons.length; i++) {
        mainButtons[i].addEventListener('click', () => {
            stateWindow.currentWindow = document.querySelectorAll('.modal')[i];
            RemoveLoader();
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
        RemoveLoader()
    });

    for (let i = 0; i < optionsBreakingBad.length; i++) {
        optionsBreakingBad[i].addEventListener('click', async () => {
            try {
                LoadingLoader();
                const response = await fetch(URL_BREAKING_BAD);
                const responseData = await response.json();
                stateCurrentPicture.currentPicture = responseData[i].img;
                AddLoader();
            } catch (error) {
                alert(error);
            }
            finally {
                RemoveLoader();
            }
        });
    }

    for (let i = 0; i < optionRiddlesQuestions.length; i++) {
        optionRiddlesQuestions[i].addEventListener('click', async () => {
            try {
                LoadingLoader();
                const response = await fetch(URL_RIDDLES);
                const responseData = await response.json();
                stateQuestion.question = responseData[i].question;
                stateAnswer.answer = 'Нажмите на кнопку "Показать Ответ"';
                buttonShowAnswer.addEventListener('click', () => {
                    stateAnswer.answer = responseData[i].answer;
                });
                AddLoader()
            } catch (error) {
                alert(error);
            }
            finally {
                RemoveLoader()
            }
        });
    }

    buttonAddAnotherPhrase.addEventListener('click', async () => {
        try {
            LoadingLoader();
            const response = await fetch(URL_PHRASE);
            const responseData = await response.json();
            stateCurrentPhrase.currentPhrase = responseData.quote.body;
            AddLoader();
        } catch (error) {
            alert(error);
        }
        finally {
            RemoveLoader()
        }
    });
    watchState(stateWindow)
    watchStateCurrentPicture(stateCurrentPicture)
    watchStateQuestion(stateQuestion)
    watchStateAnswer(stateAnswer)
    watchStatePharse(stateCurrentPhrase)

};
export default app;


