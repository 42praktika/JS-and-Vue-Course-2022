const init = () => {
    const appClass = document.querySelector('.app');

    const buttonGlobalClose = document.createElement('button');
    buttonGlobalClose.textContent = 'ЗАКРЫТЬ ОКНО';
    buttonGlobalClose.className = 'CLOSE';

    const buttonGlobalNext = document.createElement('button');
    buttonGlobalNext.textContent = 'СЛЕДУЮЩЕЕ  ОКНО';
    buttonGlobalNext.className = 'NEXT';

    appClass.append(buttonGlobalClose, buttonGlobalNext);
    const mainButtons = document.querySelector('.buttons');

    const buttonBreakingBad = document.createElement('button');
    buttonBreakingBad.textContent = 'Во все тяжкие';
    buttonBreakingBad.classList.add('button', 'button--widget');
    buttonBreakingBad.dataset.type = 'BreakingBad';

    const buttonRiddles = document.createElement('button');
    buttonRiddles.textContent = 'Загадки';
    buttonRiddles.classList.add('button', 'button--widget');
    buttonRiddles.dataset.type = 'Riddles';

    const buttonThird = document.createElement('button');
    buttonThird.textContent = 'Фраза';
    buttonThird.classList.add('button', 'button--widget');
    buttonThird.dataset.type = 'Фраза';

    mainButtons.append(buttonBreakingBad, buttonRiddles, buttonThird);

    const modalBreakingBad = document.createElement('div');
    modalBreakingBad.classList.add('modal', 'BreakingBad');
    modalBreakingBad.dataset.type = 'BreakingBad';
    modalBreakingBad.style.display = 'none';
    appClass.append(modalBreakingBad);
    const h3BreakingBad = document.createElement('h3');
    h3BreakingBad.className = 'h3BreakingBad';
    h3BreakingBad.textContent = 'Во все тяжкие';
    modalBreakingBad.append(h3BreakingBad);

    const divClassSelectBreakingBad = document.createElement('div');
    divClassSelectBreakingBad.className = 'BreakingBad-select';
    modalBreakingBad.append(divClassSelectBreakingBad);

    const selectBreakingBad = document.createElement('select');
    selectBreakingBad.className = 'selectBreakingBad';
    divClassSelectBreakingBad.append(selectBreakingBad);

    const img = document.createElement('img');
    img.id = 'imgBreakingBad';

    const currentImgBreakingBad = document.createElement('div');
    currentImgBreakingBad.className = 'currentImgBreakingBad';
    divClassSelectBreakingBad.prepend(currentImgBreakingBad);
    currentImgBreakingBad.append(img);

    const optionHeisenberg = document.createElement('option');
    const optionPinkman = document.createElement('option');
    const optionSkyler = document.createElement('option');
    const optionWalterJr = document.createElement('option');
    const optionHenry = document.createElement('option');
    const optionMarie = document.createElement('option');
    const optionMike = document.createElement('option');
    const optionSaul = document.createElement('option');
    const optionGustavo = document.createElement('option');
    const optionHector = document.createElement('option');
    const optionCrazy8 = document.createElement('option');
    const optionTuco = document.createElement('option');

    let indexBreakingBad=-1;
    const arrayValuesAndTextContent=['Heisenberg','Pinkman','Skyler','WalterJr','Henry','Marie','Mike','Saul','Gustavo','Hector','Crazy 8','Tuco']
    const arraySelectBreakingBad = [optionHeisenberg, optionPinkman, optionSkyler, optionWalterJr, optionHenry, optionMarie, optionMike, optionSaul, optionGustavo, optionHector, optionCrazy8,optionTuco];
    arraySelectBreakingBad.forEach((element) => {
        indexBreakingBad++
        selectBreakingBad.append(element);
        element.className = 'optionBreakingBad';
        element.textContent=arrayValuesAndTextContent[indexBreakingBad]
        element.value=arrayValuesAndTextContent[indexBreakingBad]
    });





    const modalRiddles = document.createElement('div');
    modalRiddles.classList.add('modal', 'Riddles');
    modalRiddles.dataset.type = 'Riddles';
    modalRiddles.style.display = 'none';
    appClass.append(modalRiddles);

    const h3Question = document.createElement('h3');
    h3Question.textContent = 'Question: ';
    h3Question.className = 'QuestionH3';
    const h3Answer = document.createElement('h3');
    h3Answer.textContent = 'Answer: ';
    h3Answer.className = 'AnswerH3';

    const h3Riddles = document.createElement('h3');
    h3Riddles.textContent = 'Загадки';
    modalRiddles.append(h3Riddles);

    const showAnswer = document.createElement('button');
    showAnswer.textContent = 'Показать ответ';
    showAnswer.className = 'ShowAnswer';
    modalRiddles.append(showAnswer);

    modalRiddles.append(h3Question, h3Answer);

    const divClassSelectRiddles = document.createElement('div');
    divClassSelectRiddles.className = 'Riddles-select';
    modalRiddles.append(divClassSelectRiddles);

    const selectRiddles = document.createElement('select');
    selectRiddles.className = 'selectRiddles';
    divClassSelectRiddles.append(selectRiddles);

    const optionQuestion1 = document.createElement('option');
    const optionQuestion2 = document.createElement('option');
    const optionQuestion3 = document.createElement('option');

    let indexRiddles=-1
    const arraySelectRiddlesTextContenAndValues=['question1','question2','question3']
    const arraySelectRiddles = [optionQuestion1, optionQuestion2, optionQuestion3];
    arraySelectRiddles.forEach((element) => {
        indexRiddles++
        selectRiddles.append(element);
        element.className = 'optionRiddlesQuestion';
        element.textContent=arraySelectRiddlesTextContenAndValues[indexRiddles]
        element.value=arraySelectRiddlesTextContenAndValues[indexRiddles]
    });


    const modalPhrase = document.createElement('div');
    modalPhrase.classList.add('modal', 'Third');
    modalPhrase.dataset.type = 'Third';
    modalPhrase.style.display = 'none';
    appClass.append(modalPhrase);
    const h3Default=document.createElement('h3')
    h3Default.textContent='Фразы'
    h3Default.className='h3Default'
    const h3Phrase = document.createElement('h3');
    h3Phrase.className = 'Phrase';
    h3Phrase.textContent='Нажмите на кнопку чтобы поменять на фразу';
    const buttonAddPhrase = document.createElement('button');
    buttonAddPhrase.textContent = 'Поменять фразу';
    buttonAddPhrase.className = 'AddPhrase';
    modalPhrase.append(h3Default,h3Phrase, buttonAddPhrase);
};
export default init;
