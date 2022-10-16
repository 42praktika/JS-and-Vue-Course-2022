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
    const calcButtons = document.querySelector('.calc__buttons');
    const calcResult = document.querySelector('.calc__result');
    const calcMain = document.querySelector('.calc__main');
    for (let i = 0; i < 10; i++) {
        calcButtons.append(document.createElement('button'));
    }

    const digits = document.querySelectorAll('button');

    let counter = 0;
    for (let i = 0; i < digits.length; i++) {
        digits[i].className = 'btn btn-dark';
        digits[i].dataset.type = "digit";
        digits[i].textContent = '' + counter;
        counter++;
        digits[i].addEventListener('click', (event) => {
            calcMain.textContent = calcMain.textContent + digits[i].textContent;
        })
    }
    const buttonPlus = document.createElement('button');
    buttonPlus.textContent = '+';
    buttonPlus.className = 'btn btn-dark';
    buttonPlus.dataset.type = "plus";
    buttonPlus.addEventListener('click', (event) => {
        calcMain.textContent = calcMain.textContent + buttonPlus.textContent;
    });

    const buttonEqual = document.createElement('button');
    buttonEqual.textContent = '=';
    buttonEqual.className = 'btn btn-dark';
    buttonEqual.dataset.type = "result";
    buttonEqual.addEventListener('click', () => {
        let splitNumbers = (calcMain.textContent).split("+");
        spanDefaultValue.textContent = splitNumbers.reduce((previousValue, currentValue) => {
            return Number(previousValue) + Number(currentValue);
        });
    })

    const buttonReset = document.createElement('button');
    buttonReset.textContent = 'Сбросить';
    buttonReset.className = 'btn btn-dark';
    buttonReset.dataset.type = "reset";
    buttonReset.addEventListener('click', (event)=> {
        calcMain.textContent = '';
        spanDefaultValue.textContent = '0';
    });

    const spanResult = document.createElement('span');
    spanResult.textContent = 'Результат: ';


    const spanDefaultValue = document.createElement('span');
    spanDefaultValue.classList.add('calc__result-number');
    spanDefaultValue.textContent = '0';

    calcResult.append(spanResult, spanDefaultValue);
    calcButtons.append(buttonPlus, buttonEqual, buttonReset);
    // Конец
};

export default setCalculator;