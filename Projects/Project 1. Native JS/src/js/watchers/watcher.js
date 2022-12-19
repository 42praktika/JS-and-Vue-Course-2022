import WatchJS from './melanke-watcher.js';
import state, { BallState, GenshinState, KanyeState } from '../state.js';
import { modalWindows } from '../consts.js';

const watch = WatchJS.watch;

watch(state, 'openedModalType', () => {
    console.log('state has changed!');
    const allModals = document.querySelectorAll('.modal');

    allModals.forEach((modal) => {
        modal.style.display = 'none';
    });

    if (state.openedModalType !== modalWindows.none) {
        const modal = document.querySelector(`.modal[data-type="${state.openedModalType}"]`);
        modal.style.display = 'block';
    }
});

watch(BallState, 'data', () => {
    const answerBall = document.querySelector('.ballAnswer');
    const containerAnswer = document.querySelector('.ball');
    const buttonGet = document.querySelector('.buttonAnswer');
    const input = document.querySelector('.input');
    let isRequestInProgress = false;

    const setIsRequestInProgress = value => {
        isRequestInProgress = value;
    };

    const setDisableButtonState = isDisabling => {
        if (isDisabling) {
            buttonGet.setAttribute('disabled', 'disabled');
        }
        else {
            buttonGet.removeAttribute('disabled');
        }
    };

    const cleanupResponse = () => {
        setTimeout(() => {
            answerBall.innerHTML = '';
            input.value = '';
            setIsRequestInProgress(false);
            setDisableButtonState(false);
        }, 3000);
    };

    const showAnswer = () => {
        setTimeout(() => {     
            answerBall.innerHTML = `<p>${BallState.data.answer}</p>`;
            containerAnswer.classList.remove('shake__ball');
            cleanupResponse();
        }, 1000);
    };


    const getAnswer = () => {
        if (isRequestInProgress) return;
        if (!input.value) return alert('please write your question :)');
        setIsRequestInProgress(true);
        setDisableButtonState(true);
        containerAnswer.classList.add('shake__ball');
        showAnswer();
    };
    
    buttonGet.addEventListener('click', getAnswer);

});

watch(GenshinState, 'data', () => {

    let thCell = document.querySelector('.cell');
    let info = document.querySelector('.info-about-char');

    let thDescription = document.createElement('div');
    thDescription.classList = 'cell';

    info.innerHTML = '';
    thCell.innerHTML = '';

    thCell.innerHTML = ('Name: ' + GenshinState.data.name + ', Element: ' + GenshinState.data.vision + ', Nation: ' + GenshinState.data.nation);
    const urlImg = 'https://api.genshin.dev/characters/' + GenshinState.data.name.toLowerCase() + '/gacha-splash';
    let image = document.createElement('img');
    image.src = '';
    image.src = `${urlImg}`;
    image.style.height = '270px';
    image.style.margin = 'auto';
    image.style.justifyContent = 'center';
    thDescription.append(GenshinState.data.description);
    info.append(thCell);
    info.append(image);
    info.append(thDescription);

});

watch(KanyeState, 'data', () => {
    const quotes = document.querySelector('.quotes');
    const container = document.querySelector('.container');
    quotes.innerHTML = `<p>${KanyeState.data.quote}</p>` + '@Kanye West';
    container.append(quotes);
});
