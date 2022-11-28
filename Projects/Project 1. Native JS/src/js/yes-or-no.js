export const yesOrNow = () => {
    const content = document.querySelector('.modal-content');

    const container = document.createElement('div');
    container.classList = 'interaction-container';
    const input = document.createElement('input');
    input.classList = 'input';
    input.type = 'text;'
    const divText = document.createElement('div');
    divText.classList = 'cell';
    divText.textContent = 'Ask your question';
    const buttonGet = document.createElement('button');
    buttonGet.textContent = 'Get answer';
    buttonGet.classList = 'buttonAnswer';

    container.append(divText);
    container.append(input);
    container.append(buttonGet);

    const containerAnswer = document.createElement('div');
    containerAnswer.classList = 'ball';
    const response = document.createElement('div');
    response.classList = 'ballResponse';
    const triangle = document.createElement('div');
    triangle.classList = 'ballTriangle';
    const answerBall = document.createElement('div');
    answerBall.classList = 'ballAnswer';

    containerAnswer.append(response);
    containerAnswer.append(triangle);
    containerAnswer.append(answerBall);

    const API_ENDPOINT = 'https://yesno.wtf/api';
    let isRequestInProgress = false;
    
    content.append(container);
    content.append(containerAnswer);

    const setIsRequestInProgress = value => {
        isRequestInProgress = value;
    };
    
    const setDisableButtonState = isDisabling => {
        if (isDisabling) {
            buttonGet.setAttribute('disabled', 'disabled');
        }
        else {
            buttonGet.removeAttribute('disabled');
        }
    };
    
    const cleanupResponse = () => {
        setTimeout(() => {
            answerBall.innerHTML = '';
            input.value = '';
            setIsRequestInProgress(false);
            setDisableButtonState(false);
        }, 3000);
    };
    
    const showAnswer = answer => {
        setTimeout(() => {
            answerBall.innerHTML = `<p>${answer}</p>`;
            containerAnswer.classList.remove('shake__ball');
            cleanupResponse();
        }, 1000);
    };
    
    const fetchAnswer = () => {
        setIsRequestInProgress(true);
    
        setDisableButtonState(true);
        containerAnswer.classList.add('shake__ball');
    
        fetch(API_ENDPOINT)
            .then(data => data.json())
            .then(data => showAnswer(data.answer));
    };
    
    
    const getAnswer = () => {
        if (isRequestInProgress) return;
        if (!input.value) return alert('please write your question :)');
    
        fetchAnswer();
    };
    
    buttonGet.addEventListener('click', getAnswer);
}