// import moduleTransformations from "@babel/preset-env/lib/module-transformations";

const module = () => {

    const arrBtns = [document.getElementById('btn-one'), 
    document.getElementById('btn-two'),
    document.getElementById('btn-three')]

    const modalWindow = document.querySelector('.modal-window');
    const close = document.querySelector('.close');
    const elementIncarousel = document.querySelector('.element-in-carousel');
    let counterOfCurrEl = 0;
    
    arrBtns.forEach(function(button) {
        button.addEventListener('click', (event) => {
            modalWindow.classList.add('show');
            if (button == arrBtns[0]){
                counterOfCurrEl = 1;
                writeStupidText(counterOfCurrEl);
            }
            else if (button == arrBtns[1]){
                counterOfCurrEl = 2;
                writeStupidText(counterOfCurrEl);
            }
            else{
                counterOfCurrEl = 3;
                writeStupidText(counterOfCurrEl);
            }
        });
    })

    const writeStupidText = (counterOfCurrEl) => { 
        elementInCarousel.textContent = ' ';
        elementInCarousel.append('i didnt add anything yet(' + counterOfCurrEl);
    }

    close.addEventListener('click', (event) => {
        modalWindow.classList.remove('show');
    })

    const elementInCarousel = document.querySelector('.element-in-carousel');
    const buttonPrev = document.querySelector('.carousel-control-prev');
    const buttonNext = document.querySelector('.carousel-control-next');

    buttonPrev.addEventListener('click', (event) => {
        if(counterOfCurrEl == 1) { counterOfCurrEl = 4;}
        counterOfCurrEl -= 1
        writeStupidText(counterOfCurrEl);
    })

    buttonNext.addEventListener('click', (event) => {
        if(counterOfCurrEl == 3) { counterOfCurrEl = 0;}
        counterOfCurrEl += 1
        writeStupidText(counterOfCurrEl);
    })

}


export default module;