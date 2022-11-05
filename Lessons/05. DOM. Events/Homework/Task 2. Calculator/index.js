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

const CALC_BUTTONS = [
    {
        text: '0',
        type: TYPES.DIGIT,
    },
    {
        text: '1',
        type: TYPES.DIGIT,
    },
    {
        text: '2',
        type: TYPES.DIGIT,
    },
    {
        text: '3',
        type: TYPES.DIGIT,
    },
    {
        text: '4',
        type: TYPES.DIGIT,
    },
    {
        text: '5',
        type: TYPES.DIGIT,
    },
    {
        text: '6',
        type: TYPES.DIGIT,
    },
    {
        text: '7',
        type: TYPES.DIGIT,
    },
    {
        text: '8',
        type: TYPES.DIGIT,
    },
    {
        text: '9',
        type: TYPES.DIGIT,
    },
        ...ADDITIONAL_BUTTONS,
]

const getSum = (text) => {
    return text
        .split('+')
        .filter((e) => !!e)
        .reduce((cur, curr) => cur + parseInt(curr, 10), 0);
}

const setCalculator = () => {
    // Начало
    const calcButtons = document.querySelector('.calc__buttons');
    const calcResult = document.querySelector('.calc__result');
    const calcMain = document.querySelector('.calc__main');

    const resultSpan = document.createElement('span');
    resultSpan.textContent = 'Результат:';

    const resultNumber = document.createElement('span');
    resultNumber.textContent = '0';
    resultNumber.classList.add('calc__result-number');

    calcResult.append(resultSpan, resultNumber);

    CALC_BUTTONS.forEach((item) => {
        const button = document.createElement('button');
        button.textContent = item.text;
        button.classList.add('btn', 'btn-dark');
        button.dataset.type = item.type;
        calcButtons.append(button);

        })
    calcButtons.addEventListener('click', (event) => {
        const target = event.target;
        switch (target.dataset.type) {
            case TYPES.DIGIT:
            case TYPES.PLUS:
                calcMain.textContent = calcMain.textContent + target.textContent;
                break;
            case TYPES.RESET:
                calcMain.textContent = ''
                resultNumber.textContent = '0';
                break;
            case TYPES.RESULT:
                resultNumber.textContent = getSum(calcMain.textContent);
        }
    })
    // Конец
};

export default setCalculator;