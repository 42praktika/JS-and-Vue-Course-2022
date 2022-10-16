const setCalculator = () => {
    const buttonsContainer = document.querySelector('.calc__buttons');
    const main = document.querySelector('.calc__main');
    const resultContainer = document.querySelector('.calc__result');

    const buttonClickHandler = (event) => {
        let target = event.target;
        let type = target.dataset.type;
        switch (type)
        {
            case "digit":
                main.append(target.textContent);
                break;
            case "plus":
                main.append(target.textContent);
                break;
            case "result":
                let totalSum = 0;
                let numbers = main.textContent.split('+');
                numbers.forEach(number => {totalSum += Number(number)});
                resultNumberSpan.textContent = totalSum;
                break;
            case "reset":
                main.textContent = '';
                resultNumberSpan.textContent = '0';
        }
    }

    for (let i = 0; i < 10; i++) {
        let btn = document.createElement('button');
        btn.textContent = String(i);
        btn.className = "btn btn-dark";
        btn.dataset.type = "digit";
        btn.addEventListener('click', buttonClickHandler)

        buttonsContainer.append(btn);
    }

    const plusButton = document.createElement('button');
    plusButton.textContent = '+';
    plusButton.className = "btn btn-dark";
    plusButton.dataset.type = "plus";
    plusButton.addEventListener('click', buttonClickHandler);

    const resultButton = document.createElement('button');
    resultButton.textContent = '=';
    resultButton.className = "btn btn-dark";
    resultButton.dataset.type = "result";
    resultButton.addEventListener('click', buttonClickHandler);

    const resetButton = document.createElement('button');
    resetButton.textContent = 'Сбросить';
    resetButton.className = "btn btn-dark";
    resetButton.dataset.type = "reset";
    resetButton.addEventListener('click', buttonClickHandler);

    buttonsContainer.append(plusButton, resultButton, resetButton);

    const resultSpan = document.createElement('span');
    resultSpan.textContent = "Результат: ";
    const resultNumberSpan = document.createElement('span');
    resultNumberSpan.textContent = '0';
    resultNumberSpan.className = 'calc__result-number';

    resultContainer.append(resultSpan, resultNumberSpan);
};

export default setCalculator;