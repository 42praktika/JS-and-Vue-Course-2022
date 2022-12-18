import {watchWindow, watchPicture, watchWhatToDo, watchDigits} from './watchers'


const app=()=>{

    const app = document.querySelector('.app')
    const buttonsTopic = document.querySelectorAll('.button')
    const buttonClose = document.querySelectorAll('.close')
    const buttonNext = document.querySelectorAll('.next')
    const modals = document.querySelectorAll('.modal')

    const buttonChangeDog = document.querySelector('.btnChangeDog')

    const buttonChangeWhatToDo = document.querySelector('.buttonChangeWhatTodo')

    const buttonGetInfo = document.querySelector('.btnInfoDigits')

    const input = document.querySelector('.input')

    const mask = document.querySelector('.mask');

    const loadingLoader = () => {
        app.append(mask);
        window.addEventListener('load', () => {
            mask.classList.add('hide');
        });
    };

    const removeLoader = () => {
        mask.remove();
    };

    removeLoader();



    modals.forEach((element)=>{
        element.style.display='none'
    })

    const state = {
        currentWindow: null
    }
    const picture = {
        currentPicture: null
    }
    const whatToDo = {
        whatToDo: ''
    }
    const infoDigits = {
        infoDigits: ''
    }

    buttonNext.forEach((element)=>{
        element.addEventListener('click',()=>{
            if (state.currentWindow === document.querySelectorAll('.modal')[2]) {
                state.currentWindow = document.querySelector('.modal');
            } else {
                state.currentWindow = state.currentWindow.nextSibling.nextSibling;
            }
        })
    })

    buttonClose.forEach((element)=>{
        element.addEventListener('click',()=>{
            state.currentWindow.style.display = 'none';
            state.currentWindow = null;
        })
    })

    for (let i = 0; i < buttonsTopic.length; i++) {
        buttonsTopic[i].addEventListener('click', () => {
            state.currentWindow = document.querySelectorAll('.modal')[i];
        });
    }

    buttonChangeDog.addEventListener('click',async function (){
        try{
            loadingLoader();
            const response = await fetch('https://dog.ceo/api/breeds/image/random')
            const responseData = await response.json()
            picture.currentPicture = responseData.message
            removeLoader()
        }catch (error){
            alert(error)
        }
    })

    buttonChangeWhatToDo.addEventListener('click',async function(){
        try {
            loadingLoader()
            const response = await fetch('https://www.boredapi.com/api/activity/')
            const responseData = await response.json()
            whatToDo.whatToDo = responseData.activity
            removeLoader()
        } catch (error) {
            alert(error)
        }
    })

    buttonGetInfo.addEventListener('click',async function(){
        let inputDigit=input.value
        try{
            loadingLoader()
            const response=await fetch('http://numbersapi.com/'+inputDigit+'/?json')
            const responseData=await response.json()
            infoDigits.infoDigits=responseData.text
            removeLoader()
        }catch (error){
            alert(error)
        }
    })


    watchWindow(state)
    watchPicture(picture)
    watchWhatToDo(whatToDo)
    watchDigits(infoDigits)


}
export default app
