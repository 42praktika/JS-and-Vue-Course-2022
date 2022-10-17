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

    const elem = document.querySelector('.calc__buttons');

    for (let i = 0; i < 10; i++) {
        elem.append(document.createElement('button'));
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

    const buttonSum = document.createElement('button');
    buttonSum.dataset.type = "plus";
    buttonSum.textContent = '+';
    buttonSum.className = 'btn btn-dark'

    const buttonDone = document.createElement('button');
    buttonDone.dataset.type = "result";
    buttonDone.textContent = "=";
    buttonDone.className = 'btn btn-dark';

    const buttonAgain = document.createElement('button');
    buttonAgain.dataset.type = "reset";
    buttonAgain.textContent = "Сбросить";
    buttonAgain.className = "btn btn-dark";

    elem.append(buttonSum, buttonDone, buttonAgain);

    const result = document.querySelector(".calc__result");

    const resSpan = document.createElement('span');
    resSpan.textContent = "Результат: ";

    const numSpan = document.createElement("span");
    numSpan.textContent = "0";
    numSpan.className = "calc__result-number";

    result.append(resSpan, numSpan);

    const main = document.querySelector('.calc__main');

    buttonAgain.addEventListener('click', () => {
        main.textContent = "";
        numSpan.textContent = "0";
    });

    buttonSum.addEventListener('click', () => {
        main.textContent = main.textContent + buttonSum.textContent;
    });

    buttonDone.addEventListener('click', () => {
        let split = (main.textContent).split("+");
        const sum = split.reduce((curr, currValue) => {
            return Number(curr) + Number(currValue);
        });
        numSpan.textContent = sum;
    });

};

export default setCalculator;