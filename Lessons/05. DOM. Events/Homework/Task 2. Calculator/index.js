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
    const calcMain = document.querySelector('.calc__main');
    const buttons = document.querySelector('.calc__buttons');

    const calcResult = document.querySelector('.calc__result');
    const spanResult = document.createElement('span');
    spanResult.textContent = 'Результат: ';

    const spanNums = document.createElement('span');
    spanNums.className = 'calc__result-number';
    spanNums.textContent = '0';

    calcResult.append(spanResult, spanNums);

    for (let i = 0; i < 10; i++) {
        const button = document.createElement('button');
        button.className = 'btn btn-dark';
        button.dataset.type = TYPES[0];
        button.textContent = '' + i;
        buttons.append(button);

        button.addEventListener('click', function() {
            calcMain.textContent = calcMain.textContent + button.textContent;
        })
    }

    const buttonPlus = document.createElement('button');
    buttonPlus.className = 'btn btn-dark';
    buttonPlus.dataset.type = ADDITIONAL_BUTTONS[0].type;
    buttonPlus.textContent = '' + ADDITIONAL_BUTTONS[0].text;

    buttonPlus.addEventListener('click', function () {
        calcMain.textContent = calcMain.textContent + buttonPlus.textContent;
    })

    const buttonResult = document.createElement('button');
    buttonResult.className = 'btn btn-dark';
    buttonResult.dataset.type = ADDITIONAL_BUTTONS[1].type;
    buttonResult.textContent = '' + ADDITIONAL_BUTTONS[1].text;

    buttonResult.addEventListener('click', function () {
        const arrayOfCalcMainTextContent = calcMain.textContent.split('+');
        for (let i = 0; i < arrayOfCalcMainTextContent.length; i++) {
            spanNums.textContent = parseInt(spanNums.textContent) + parseInt(arrayOfCalcMainTextContent[i]);
        }
    })

    const buttonReset = document.createElement('button');
    buttonReset.className = 'btn btn-dark';
    buttonReset.dataset.type = ADDITIONAL_BUTTONS[2].type;
    buttonReset.textContent = '' + ADDITIONAL_BUTTONS[2].text

    buttonReset.addEventListener('click', function () {
        calcMain.textContent = '';
        spanNums.textContent = '0';
    })

    buttons.append(buttonPlus, buttonResult, buttonReset);
    // Конец
};

export default setCalculator;