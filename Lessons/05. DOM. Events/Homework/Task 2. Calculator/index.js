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
    const calcMain = document.querySelector('.calc__main');
    const calcButtons = document.querySelector('.calc__buttons');
    let result = 0;
    for (let i = 0; i < 10; i++) {
        const digitBtn = document.createElement('button');
        digitBtn.dataset.type = TYPES.DIGIT;
        digitBtn.textContent = i.toString();
        digitBtn.className = 'btn btn-dark';
        digitBtn.addEventListener('click', event => {
            calcMain.textContent += digitBtn.textContent;
        })
        calcButtons.append(digitBtn);
    }
    for (let i = 0; i < 3; i++) {
        const btn = document.createElement('button');
        btn.className = "btn btn-dark";
        btn.textContent = ADDITIONAL_BUTTONS[i].text;
        btn.dataset.type = ADDITIONAL_BUTTONS[i].type;
        btn.addEventListener('click', event => {
            if (i === 0) {
                calcMain.textContent += btn.textContent;
            }
            if (i === 1) {
                const resString = calcMain.textContent.split('+');
                for (let i = 0; i < resString.length; i++) {
                    result += Number(resString[i]);
                }
                spanRes.textContent = result.toString();
            }
            if (i === 2) {
                calcMain.textContent = '';
                spanRes.textContent = '0';
                result = 0;
            }
        })
        calcButtons.append(btn);
    }
    const calcResult = document.querySelector('.calc__result');
    const spanResText = document.createElement('span');
    spanResText.textContent = 'Результат:';
    calcResult.append(spanResText);
    const spanRes = document.createElement('span');
    spanRes.textContent = result.toString();
    spanRes.className = 'calc__result-number';
    calcResult.append(spanRes);

};

export default setCalculator;