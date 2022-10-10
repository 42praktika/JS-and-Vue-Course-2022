const TYPES = {
    DIGIT: 'digit',
    PLUS: 'plus',
    RESULT: 'result',
    RESET: 'reset',
};

const ADDITIONAL_BUTTONS = [
    {
        text: '+',
        type: TYPES.PLUS,
    },
    {
        text: '=',
        type: TYPES.RESULT,
    },
    {
        text: 'Сбросить',
        type: TYPES.RESET,
    },
];

const setCalculator = () => {
    // Начало
    const buttons = document.querySelector('.calc__buttons');
    const zeroButton = document.createElement('button');
    const oneButton = document.createElement('button');
    const twoButton = document.createElement('button');
    const threeButton = document.createElement('button');
    const fourButton = document.createElement('button');
    const fiveButton = document.createElement('button');
    const sixButton = document.createElement('button');
    const sevenButton = document.createElement('button');
    const eightButton = document.createElement('button');
    const nineButton = document.createElement('button');
    const plusButton = document.createElement('button');
    const ravnoButton = document.createElement('button');
    const resetButton = document.createElement('button');

    zeroButton.className='btn btn-dark'
    oneButton.className='btn btn-dark'
    twoButton.className='btn btn-dark'
    threeButton.className='btn btn-dark'
    fourButton.className='btn btn-dark'
    fiveButton.className='btn btn-dark'
    sixButton.className='btn btn-dark'
    sevenButton.className='btn btn-dark'
    eightButton.className='btn btn-dark'
    nineButton.className='btn btn-dark'
    plusButton.className='btn btn-dark'
    ravnoButton.className='btn btn-dark'
    resetButton.className='btn btn-dark'

    zeroButton.textContent='0'
    oneButton.textContent='1'
    twoButton.textContent='2'
    threeButton.textContent='3'
    fourButton.textContent='4'
    fiveButton.textContent='5'
    sixButton.textContent='6'
    sevenButton.textContent='7'
    eightButton.textContent='8'
    nineButton.textContent='9'
    plusButton.textContent='+'
    ravnoButton.textContent='='
    resetButton.textContent='Сбросить'

    zeroButton.dataset.type='digit'
    oneButton.dataset.type='digit'
    twoButton.dataset.type='digit'
    threeButton.dataset.type='digit'
    fourButton.dataset.type='digit'
    fiveButton.dataset.type='digit'
    sixButton.dataset.type='digit'
    sevenButton.dataset.type='digit'
    eightButton.dataset.type='digit'
    nineButton.dataset.type='digit'
    plusButton.dataset.type='plus'
    ravnoButton.dataset.type='result'
    resetButton.dataset.type='reset'

    buttons.append(zeroButton,oneButton,twoButton,threeButton,fourButton,fiveButton,sixButton,
        sevenButton,eightButton,nineButton,plusButton,ravnoButton,resetButton)

    const result =document.querySelector('.calc__result')
    const spanResult = document.createElement('span')
    const spanNum=document.createElement('span')
    spanResult.textContent='Результат: '
    spanNum.textContent='0'
    spanNum.className='calc__result-number'
    result.append(spanResult,spanNum)

    resetButton.addEventListener('click',function (){
        const main=document.querySelector('.calc__main')
        const res = document.querySelector(' .calc__result-number')
        res.textContent=0
        main.textContent=''

    })

    zeroButton.addEventListener('click',function (event){
        const main=document.querySelector('.calc__main')
        main.textContent = main.textContent + event.target.textContent;
    })
    oneButton.addEventListener('click',function (event){
        const main=document.querySelector('.calc__main')
        main.textContent = main.textContent + event.target.textContent;
    })
    twoButton.addEventListener('click',function (event){
        const main=document.querySelector('.calc__main')
        main.textContent = main.textContent + event.target.textContent;
    })
    threeButton.addEventListener('click',function (event){
        const main=document.querySelector('.calc__main')
        main.textContent = main.textContent + event.target.textContent;
    })
    fourButton.addEventListener('click',function (event){
        const main=document.querySelector('.calc__main')
        main.textContent = main.textContent + event.target.textContent;
    })
    fiveButton.addEventListener('click',function (event){
        const main=document.querySelector('.calc__main')
        main.textContent = main.textContent + event.target.textContent;
    })
    sixButton.addEventListener('click',function (event){
        const main=document.querySelector('.calc__main')
        main.textContent = main.textContent + event.target.textContent;
    })
    sevenButton.addEventListener('click',function (event){
        const main=document.querySelector('.calc__main')
        main.textContent = main.textContent + event.target.textContent;
    })
    eightButton.addEventListener('click',function (event){
        const main=document.querySelector('.calc__main')
        main.textContent = main.textContent + event.target.textContent;
    })
    nineButton.addEventListener('click',function (event){
        const main=document.querySelector('.calc__main')
        main.textContent = main.textContent + event.target.textContent;
    })
    plusButton.addEventListener('click',function (event){
        const main=document.querySelector('.calc__main')
        main.textContent = main.textContent + event.target.textContent;
    })
    ravnoButton.addEventListener('click',function (){
        const res=document.querySelector('.calc__result-number')
        const main =document.querySelector('.calc__main')
        let sum=0;
        let arrayDigits = main.textContent.split('+')
        for (let i = 0; i < arrayDigits.length; i++) {
            sum+=Number(arrayDigits[i])
        }
        res.textContent=sum
    })







    // Конец
};

export default setCalculator;