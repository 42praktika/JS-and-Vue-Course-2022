import { setBallData } from './apis/setData.js';

export const yesOrNo = () => {
    const content = document.querySelector('.modal-content');

    const container = document.createElement('div');
    container.classList = 'interaction-container';
    const input = document.createElement('input');
    input.classList = 'input';
    input.type = 'text;';
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

    content.append(container);
    content.append(containerAnswer);

    setBallData();
};
