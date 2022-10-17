const setCalculator = () => {
    const Buttons=document.querySelector('.calc__buttons');
    const button0=document.createElement('button')
    const button1=document.createElement('button')
    const button2=document.createElement('button')
    const button3=document.createElement('button')
    const button4=document.createElement('button')
    const button5=document.createElement('button')
    const button6=document.createElement('button')
    const button7=document.createElement('button')
    const button8=document.createElement('button')
    const button9=document.createElement('button')
    const buttonPlus=document.createElement('button')
    const buttonEqually=document.createElement('button')
    const buttonClear=document.createElement('button')

    button0.dataset.type="digit"
    button1.dataset.type="digit"
    button2.dataset.type="digit"
    button3.dataset.type="digit"
    button4.dataset.type="digit"
    button5.dataset.type="digit"
    button6.dataset.type="digit"
    button7.dataset.type="digit"
    button8.dataset.type="digit"
    button9.dataset.type="digit"
    buttonPlus.dataset.type='plus'
    buttonEqually.dataset.type="result"
    buttonClear.dataset.type='reset'

    button0.className='btn btn-danger'
    button1.className='btn btn-danger'
    button2.className='btn btn-danger'
    button3.className='btn btn-danger'
    button4.className='btn btn-danger'
    button5.className='btn btn-danger'
    button6.className='btn btn-danger'
    button7.className='btn btn-danger'
    button8.className='btn btn-danger'
    button9.className='btn btn-danger'
    buttonPlus.className='btn btn-danger'
    buttonEqually.className='btn btn-danger'
    buttonClear.className='btn btn-danger'

    button0.textContent='0'
    button1.textContent='1'
    button2.textContent='2'
    button3.textContent='3'
    button4.textContent='4'
    button5.textContent='5'
    button6.textContent='6'
    button7.textContent='7'
    button8.textContent='8'
    button9.textContent='9'
    buttonPlus.textContent='+'
    buttonEqually.textContent='='
    buttonClear.textContent='Сбросить'

    Buttons.append(button0,button1,button2,button3,button4,button5,button6,button7,button8,button9,buttonPlus,buttonEqually,buttonClear)


    const element2=document.querySelector('.calc__result')
    const spanResult=document.createElement('span')
    spanResult.textContent='Результат:'
    const spanAnswer=document.createElement('span')
    spanAnswer.textContent='0'
    spanAnswer.className='calc__result-number'
    element2.append(spanResult,spanAnswer)

    const element3=document.querySelector(".calc__main")
    button0.addEventListener('click',()=> {
        element3.textContent=element3.textContent+button0.textContent
    });
    button1.addEventListener('click',()=> {
        element3.textContent=element3.textContent+button1.textContent
    });
    button2.addEventListener('click',()=> {
        element3.textContent=element3.textContent+button2.textContent
    });
    button3.addEventListener('click',()=> {
        element3.textContent=element3.textContent+button3.textContent
    });
    button4.addEventListener('click',()=> {
        element3.textContent=element3.textContent+button4.textContent
    });
    button5.addEventListener('click',()=> {
        element3.textContent=element3.textContent+button5.textContent
    });
    button6.addEventListener('click',()=> {
        element3.textContent=element3.textContent+button6.textContent
    });
    button7.addEventListener('click',()=> {
        element3.textContent=element3.textContent+button7.textContent
    });
    button8.addEventListener('click',()=> {
        element3.textContent=element3.textContent+button8.textContent
    });
    button9.addEventListener('click',()=> {
        element3.textContent=element3.textContent+button9.textContent
    });
    buttonPlus.addEventListener('click',()=> {
        element3.textContent=element3.textContent+buttonPlus.textContent
    });

    buttonClear.addEventListener('click',()=> {
        element3.textContent='';
        spanAnswer.textContent='0'
    });

    buttonEqually.addEventListener('click',()=> {
        const output=document.querySelector('.calc__result-number')
        const main =document.querySelector('.calc__main')
        let summa=0;
        let digits = main.textContent.split('+')
        for (let i = 0; i <digits.length; i++) {
            summa+=Number(digits[i])
        }
        output.textContent=summa
    });




};

export default setCalculator;