import WatchJS from 'melanke-watchjs';

const {watch} = WatchJS;

export const watchWindow = (state) => {
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

export const watchPicture = (picture) => {
    watch(picture, 'currentPicture', () => {
        document.querySelector('#imgDog').setAttribute('src', picture.currentPicture)
    })
}
export const watchWhatToDo=(whatToDo)=>{
    watch(whatToDo,'whatToDo',()=>{
        document.querySelector('.h3WhatToDo').textContent=whatToDo.whatToDo
    })
}
export const watchDigits=(infoDigits)=>{
    watch(infoDigits,'infoDigits',()=>{
        document.querySelector('.h3InfoDigit').textContent=infoDigits.infoDigits
    })
}

