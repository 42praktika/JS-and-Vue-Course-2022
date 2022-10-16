

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
    for (let i = 0; i < 10; i++) {
        let button = document.createElement('button');
        button.className = 'btn btn-dark';
        button.dataset.type = "digit";
        button.textContent = i;
        button.addEventListener('click', function () {
            if(button.textContent != 0 || (main.textContent != '' && main.textContent[main.textContent.length-1] != '+')){
                main.textContent += button.textContent;
            }
        })
        buttons.append(button);
    }

    const buttonPlus = document.createElement('button');
    buttonPlus.dataset.type = "plus";
    buttonPlus.textContent = '+';
    buttonPlus.className = 'btn btn-dark'

    const buttonResult = document.createElement('button');
    buttonResult.dataset.type = "result";
    buttonResult.textContent = '=';
    buttonResult.className = 'btn btn-dark';

    const buttonReset = document.createElement('button');
    buttonReset.dataset.type = "reset";
    buttonReset.textContent = 'Сбросить';
    buttonReset.className = "btn btn-dark";

    buttons.append(buttonPlus, buttonResult, buttonReset);

    const result = document.querySelector(".calc__result");

    const resultSpan = document.createElement('span');
    resultSpan.textContent = "Результат: ";
    const numberSpan = document.createElement("span");
    numberSpan.textContent = '0';
    numberSpan.className = "calc__result-number";

    result.append(resultSpan, numberSpan);

    const main = document.querySelector('.calc__main');

    buttonPlus.addEventListener('click', () => {
        if(main.textContent != '' && main.textContent[main.textContent.length-1] != '+'){
            main.textContent += buttonPlus.textContent;
        }
    });
 
    buttonReset.addEventListener('click', () => {
        if(main.textContent != ''){
            numberSpan.textContent = '0';
            main.textContent = '';
        }
    });

    buttonResult.addEventListener('click', () => {
        if(main.textContent != ''){
            let nums = (main.textContent).split("+");
            let sum = 0;
            nums.forEach(el => {
                sum += Number(el);
            });
            numberSpan.textContent = sum;
        }
    })
};

export default setCalculator;