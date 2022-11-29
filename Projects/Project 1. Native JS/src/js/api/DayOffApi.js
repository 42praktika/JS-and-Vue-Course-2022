import { MODALS } from "../const/ModalConst";

export const getDayOffAPI = () => {
    const modal__container = document.querySelector('.modal__container'); // root  document
    const activeWindow = document.createElement('div'); // class for all documents
    const mainDiv = document.createElement('div'); // container of content windows
    const mainArticleDiv = document.createElement('div'); // article content window
    const mainBodyDiv = document.createElement('div'); // body content window
    const input = document.createElement('input'); // input table
    let result = ''; // answer on question
    const submitButton = document.createElement('button'); // button to submit data
    const article = document.createElement('h1'); // article

    activeWindow.className = 'activeWindow';
    activeWindow.classList.add('apiWindow');
    mainDiv.classList.add('windowMainDiv');
    mainArticleDiv.classList.add('windowMainArticleDiv');
    mainBodyDiv.classList.add('windowMainBodyDiv');
    input.classList.add('input');
    input.placeholder = 'Enter date like 01.01.2022';
    submitButton.textContent = 'Enter';
    submitButton.classList.add('submitBtn');
    article.textContent = MODALS[1].text;

    mainArticleDiv.append(article);
    mainBodyDiv.append(input);
    mainDiv.append(mainArticleDiv, mainBodyDiv);
    activeWindow.append(mainDiv);
    modal__container.append(activeWindow);
    mainBodyDiv.append(submitButton);

    submitButton.addEventListener('click', () => {
        const splitInput = input.value.split('.'); // array like {dd},{mm},{yyyy}
        const splitInputWithDot = input.value.split(''); // array like {d},{d},{.},{m}, ... , {y}

        if (check(splitInput, splitInputWithDot)) {
            const spanText = reverse(input.value);
            const url = `https://isdayoff.ru/${spanText}`;

            fetch(url)
                .then((resp) => resp.json())
                .then((data) => {
                    result = data;
                }).then(renderResult)
                .catch(() => {
                    throw new Error('Something went wrong!');
                });
        } else {
            renderAlert();
        }
    });

    const renderAlert = () => {
        const deleteAlert = document.querySelector('.dayOffApi');
        const windowMainBodyDiv = document.querySelector('.windowMainBodyDiv');
        if (windowMainBodyDiv.childElementCount > 2) {
            windowMainBodyDiv.removeChild(deleteAlert);
        }

        const alert = document.createElement('h1');

        alert.textContent = 'Invalid date format';
        alert.classList.add('dayOffApi');

        mainBodyDiv.append(alert);
    };

    const renderResult = () => {
        const deleteAnswer = document.querySelector('.dayOffApi');
        const windowMainBodyDiv = document.querySelector('.windowMainBodyDiv');
        if (windowMainBodyDiv.childElementCount > 2) {
            windowMainBodyDiv.removeChild(deleteAnswer);
        }

        const answer = document.createElement('h1');

        if (result === 1) {
            answer.textContent = 'DayOff';
        } else if (result === 0) {
            answer.textContent = 'Not DayOff';
        } else answer.textContent = 'Oy'

        answer.classList.add('dayOffApi');

        mainBodyDiv.append(answer);
    };

    const reverse = (text) => {
        return  text.split('.').reverse().join('');
    };

    const check = (arr1, arr2) => {
        let dots = '';

        arr2.forEach((elem) => {
            if (elem === '.') {
                dots++;
            }
        });

        if (dots === 2) { // correct dots
            if (Number(arr1[2]) > 2017 && Number(arr1[2]) <= 2025) { // correct year
                if (Number(arr1[1]) > 0 && Number(arr1[1]) <= 12) { // correct month
                    if (arr1[1] === '02' && Number(arr1[2]) % 4 === 0) { // february 29
                        if (Number(arr1[0]) > 0 && Number(arr1[0]) <= 29) {
                            return true;
                        } else return false;
                    } else if (arr1[1] === '02' && Number(arr1[2]) % 4 !== 0) { // february 28
                        if (Number(arr1[0]) > 0 && Number(arr1[0]) <= 28) {
                            return true;
                        } else return false;
                    } else if (arr1[1] === '01' || arr1[1] === '03' || arr1[1] === '05' || arr1[1] === '07' || arr1[1] === '08' || arr1[1] === '10' || arr1[1] === '12') { // 31 days
                        if (Number(arr1[0]) > 0 && Number(arr1[0]) <= 31) {
                            return true
                        } else return false
                    } else if (arr1[1] === '03' || arr1[1] === '04' || arr1[1] === '06' || arr1[1] === '09' || arr1[1] === '11') { // 30 days
                        if (Number(arr1[0]) > 0 && Number(arr1[0]) <= 30) {
                            return true
                        } else return false
                    } else return false;
                        } else return false
            } else return false
        } else return false;
    };
};

// Notes
// 1) Add Info about correct data (important)