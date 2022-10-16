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
    let result = 0;
    const calcMain = document.querySelector('.calc__main');
    const calcResult = document.querySelector('.calc__result');
    const firstSpanResult = document.createElement('span');
    firstSpanResult.textContent = 'Результат:';
    calcResult.append(firstSpanResult);
    const secondSpanResult = document.createElement('span');
    secondSpanResult.className = 'calc__result-number';
    secondSpanResult.textContent = result;
    calcResult.append(secondSpanResult);
    const buttonsText = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '=', 'Сбросить'];
    const calcButtons = document.querySelector('.calc__buttons');
    for (let i of buttonsText) {
        const button = document.createElement('button');
        button.textContent = i;
        button.className = 'btn btn-dark';
        calcButtons.append(button);
        button.addEventListener('click', (event) => {
            switch (event.target.textContent) {
                case 'Сбросить':
                    calcMain.textContent = '';
                    result = 0;
                    secondSpanResult.textContent = result;
                    break;
                case '=':
                    result = eval(calcMain.textContent);
                    secondSpanResult.textContent = result;
                    break;
                default:
                    calcMain.textContent += event.target.textContent;
            }
        });
    }
    // Конец
};

export default setCalculator;