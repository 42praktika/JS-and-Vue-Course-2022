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
    const buttons = document.querySelector('.calc__buttons')
    const zero = document.createElement("button")
    const one = document.createElement("button")
    const two = document.createElement("button")
    const three = document.createElement("button")
    const four = document.createElement("button")
    const five = document.createElement("button")
    const six = document.createElement("button")
    const seven = document.createElement("button")
    const eight = document.createElement("button")
    const nine = document.createElement("button")
    const plus = document.createElement('button')
    const result = document.createElement('button')
    const reset = document.createElement('button')

    zero.className='btn btn-dark'
    one.className='btn btn-dark'
    two.className='btn btn-dark'
    three.className='btn btn-dark'
    four.className='btn btn-dark'
    five.className='btn btn-dark'
    six.className='btn btn-dark'
    seven.className='btn btn-dark'
    eight.className='btn btn-dark'
    nine.className='btn btn-dark'
    plus.className='btn btn-dark'
    result.className='btn btn-dark'
    reset.className='btn btn-dark'

    zero.textContent='0'
    one.textContent='1'
    two.textContent='2'
    three.textContent='3'
    four.textContent='4'
    five.textContent='5'
    six.textContent='6'
    seven.textContent='7'
    eight.textContent='8'
    nine.textContent='9'
    plus.textContent='+'
    result.textContent='='
    reset.textContent='Сбросить'

    zero.dataset.type='digit'
    one.dataset.type='digit'
    two.dataset.type='digit'
    three.dataset.type='digit'
    four.dataset.type='digit'
    five.dataset.type='digit'
    six.dataset.type='digit'
    seven.dataset.type='digit'
    eight.dataset.type='digit'
    nine.dataset.type='digit'
    plus.dataset.type='plus'
    result.dataset.type='result'
    reset.dataset.type='reset'

    buttons.append(zero, one, two, three, four, five, six, seven, eight, nine, plus, result, reset)

    const result_calc =document.querySelector('.calc__result')
    const span_result = document.createElement('span')
    const span_number = document.createElement('span')
    span_result.textContent='Результат: '
    span_number.textContent='0'
    span_number.className='calc__result-number'
    result_calc.append(span_result,span_number)

    reset.addEventListener('click',(event) => {
        const main = document.querySelector('.calc__main')
        const res = document.querySelector(' .calc__result-number')
        res.textContent = 0
        main.textContent = ""
    })

    zero.addEventListener('click',(event) => {
        const main = document.querySelector('.calc__main')
        main.textContent = main.textContent + event.target.textContent
    })

    one.addEventListener('click', (event) => {
        const main = document.querySelector('.calc__main')
        main.textContent = main.textContent + event.target.textContent
    })

    two.addEventListener('click',(event) => {
        const main = document.querySelector('.calc__main')
        main.textContent = main.textContent + event.target.textContent
    })

    three.addEventListener('click',(event) => {
        const main = document.querySelector('.calc__main')
        main.textContent = main.textContent + event.target.textContent
    })

    four.addEventListener('click',(event) => {
        const main = document.querySelector('.calc__main')
        main.textContent = main.textContent + event.target.textContent
    })

    five.addEventListener('click',(event) => {
        const main = document.querySelector('.calc__main')
        main.textContent = main.textContent + event.target.textContent
    })
    six.addEventListener('click',(event) => {
        const main = document.querySelector('.calc__main')
        main.textContent = main.textContent + event.target.textContent
    })
    seven.addEventListener('click',(event) => {
        const main = document.querySelector('.calc__main')
        main.textContent = main.textContent + event.target.textContent
    })
    eight.addEventListener('click',(event) => {
        const main = document.querySelector('.calc__main')
        main.textContent = main.textContent + event.target.textContent
    })
    nine.addEventListener('click',(event) => {
        const main = document.querySelector('.calc__main')
        main.textContent = main.textContent + event.target.textContent
    })
    plus.addEventListener('click',(event) => {
        const main = document.querySelector('.calc__main')
        main.textContent = main.textContent + event.target.textContent
    })
    result.addEventListener('click',function (){
        const res = document.querySelector('.calc__result-number')
        const main = document.querySelector('.calc__main')
        let summa = 0;
        let array = main.textContent.split('+')
        for (let i = 0; i < array.length; i++) {
            summa += Number(array[i])
        }
        res.textContent = summa
    })
};

export default setCalculator;