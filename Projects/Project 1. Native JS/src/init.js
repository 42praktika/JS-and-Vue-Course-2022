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
    buttonThird.dataset.type = 'Third';

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
    optionHeisenberg.value = 'Heisenberg';
    optionHeisenberg.textContent = 'Heisenberg';

    const optionPinkman = document.createElement('option');
    optionPinkman.value = 'Pinkman';
    optionPinkman.textContent = 'Pinkman';

    const optionSkyler = document.createElement('option');
    optionSkyler.value = 'Skyler';
    optionSkyler.textContent = 'Skyler';

    const optionWalterJr = document.createElement('option');
    optionWalterJr.value = 'WalterJr';
    optionWalterJr.textContent = 'Walter Jr';

    const optionHenry = document.createElement('option');
    optionHenry.value = 'Henry';
    optionHenry.textContent = 'Henry';

    const optionMarie = document.createElement('option');
    optionMarie.value = 'Marie';
    optionMarie.textContent = 'Marie';

    const optionMike = document.createElement('option');
    optionMike.value = 'Mike';
    optionMike.textContent = 'Mike';

    const optionSaul = document.createElement('option');
    optionSaul.value = 'Saul';
    optionSaul.textContent = 'Saul (Better Call Saul)';

    const optionGustavo = document.createElement('option');
    optionGustavo.value = 'Gustavo';
    optionGustavo.textContent = 'Gustavo';

    const optionHector = document.createElement('option');
    optionHector.value = 'Hector';
    optionHector.textContent = 'DING DING DING!!!';

    const optionCrazy8 = document.createElement('option');
    optionCrazy8.value = 'Crazy 8';
    optionCrazy8.textContent = 'Crazy 8';

    const optionTuco = document.createElement('option');
    optionTuco.value = 'Tuco';
    optionTuco.textContent = 'Tuco';

    const arraySelectBreakingBad = [optionHeisenberg, optionPinkman, optionSkyler, optionWalterJr, optionHenry, optionMarie, optionMike, optionSaul, optionGustavo, optionHector, optionCrazy8,optionTuco];
    arraySelectBreakingBad.forEach((element) => {
        selectBreakingBad.append(element);
        element.className = 'optionBreakingBad';
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
    optionQuestion1.value = 'question1';
    optionQuestion1.textContent = 'question1';

    const optionQuestion2 = document.createElement('option');
    optionQuestion2.value = 'question2';
    optionQuestion2.textContent = 'question2';

    const optionQuestion3 = document.createElement('option');
    optionQuestion3.value = 'question3';
    optionQuestion3.textContent = 'question3';

    const arraySelectRiddles = [optionQuestion1, optionQuestion2, optionQuestion3];
    arraySelectRiddles.forEach((element) => {
        selectRiddles.append(element);
        element.className = 'optionRiddlesQuestion';
    });

    /*const h3Riddles = document.createElement('h3');
    h3Riddles.textContent = 'Загадки';
    modalRiddles.append(h3Riddles);*/

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
    h3Phrase.textContent='Фразы';
    const buttonAddPhrase = document.createElement('button');
    buttonAddPhrase.textContent = 'Поменять фразу';
    buttonAddPhrase.className = 'AddPhrase';
    modalPhrase.append(h3Default,h3Phrase, buttonAddPhrase);
};
export default init;
