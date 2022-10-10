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
    const el = document.querySelector('.calc__buttons');

    for (let i = 0; i < 10; i++) {
        el.append(document.createElement('button'));
    }

    const digits = document.querySelectorAll('button');

    let count = 0;
    digits.forEach((button) => {
        button.className = 'btn btn-dark';
        button.dataset.type = "digit";
        button.textContent = ""+count;
        count++;
        button.addEventListener('click', function () {
            main.textContent = main.textContent + button.textContent;
        })
    });

    const plusButton = document.createElement('button');
    plusButton.dataset.type = "plus";
    plusButton.textContent = '+';
    plusButton.className = 'btn btn-dark'

    const resultButton = document.createElement('button');
    resultButton.dataset.type = "result";
    resultButton.textContent = "=";
    resultButton.className = 'btn btn-dark';

    const resetButton = document.createElement('button');
    resetButton.dataset.type = "reset";
    resetButton.textContent = "Сбросить";
    resetButton.className = "btn btn-dark";

    el.append(plusButton, resultButton, resetButton);

    const result = document.querySelector(".calc__result");

    const resultSpan = document.createElement('span');
    resultSpan.textContent = "Результат: ";

    const numberSpan = document.createElement("span");
    numberSpan.textContent = "0";
    numberSpan.className = "calc__result-number";

    result.append(resultSpan, numberSpan);

    const main = document.querySelector('.calc__main');

    resetButton.addEventListener('click', () => {
        main.textContent = "";
        numberSpan.textContent = "0";
    });

    plusButton.addEventListener('click', () => {
        main.textContent = main.textContent + plusButton.textContent;
    });

    resultButton.addEventListener('click', () => {
        let split = (main.textContent).split("+");
        const sum = split.reduce((curr, currValue) => {
            return Number(curr) + Number(currValue);
        });
        numberSpan.textContent = sum;
    })
    // Конец
};

export default setCalculator;