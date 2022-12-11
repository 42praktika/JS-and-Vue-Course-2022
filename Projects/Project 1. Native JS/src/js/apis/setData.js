import {BallState, GenshinState, KanyeState} from '../state.js';

export const setBallData = () => {
    fetch('https://yesno.wtf/api')
            .then(response => response.json())
            .then(info => {
                BallState.data = info;
            });
}

export const setGenshinData = (character) => {

    fetch('https://api.genshin.dev/characters/' + character)
        .then(response => response.json())
        .then(info => {
            hideLoading();
            GenshinState.data = info;
        });

    function hideLoading() {
        const loader = document.querySelector('div.loading');
        loader.classList.remove("display");
    }
}

export const setKanyeData = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(info => {
            KanyeState.data = info;
        });
}