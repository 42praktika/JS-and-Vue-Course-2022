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
    const buttonsElement = document.querySelector('.calc__buttons');
    const mainElement= document.querySelector('.calc__main');
    const result = document.querySelector('.calc__result');
    const spanText = document.createElement('span');
    const spanNumber = document.createElement('span');
    spanText.textContent = 'Результат: '
    spanNumber.className = 'calc__result-number';
    spanNumber.textContent = '0';
    result.append(spanText, spanNumber);

    const buttonArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '=', 'Сбросить'];

    const handlePressedButton = (event) => {
        const currentElement = event.target;
        switch (currentElement.textContent) {
            case ('Сбросить'):
                mainElement.textContent = '';
                spanNumber.textContent = '0';
                break;
            case ('='):
                let result = 0;
                let numbersArray = mainElement.textContent.split('+');
                for (let i = 0; i < numbersArray.length; i++) {
                    result += Number(numbersArray[i]);
                }
                spanNumber.textContent = result.toString();
                break;
            default:
                mainElement.textContent += currentElement.textContent;
        }
    }

    buttonArray.forEach((button) => {
        const buttonElement = document.createElement('button');
        buttonElement.className = 'btn btn-dark';
        buttonElement.textContent = button;
        buttonElement.addEventListener('click', handlePressedButton);
        buttonsElement.append(buttonElement);
    });
    // Конец
};

export default setCalculator;
