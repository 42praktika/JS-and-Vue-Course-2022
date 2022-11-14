//Я понимаю это плохой код,но я переисправлю,поменяю html и добавлю MVC
//Можете подсказать,как сделать реализовать кнопку buttonNext с MVC,не меняю html?
//Просто можно вручную все кнопки создать в html , все классы там придать,сделать большой базовый DOM 
//и кода будет меньше и без труда реализовать кнопку buttonNext,но я не уверен ,что можно было так делать
import "./index.css"
import "./index.html"

    const appClass = document.querySelector(".app")

    const divModel = document.createElement('div')
    divModel.className = "modal-container"
    divModel.id = "my_modal"
    appClass.append(divModel)

    const classButtons = document.querySelector('.buttons')

    const buttonHockey = document.createElement('button')
    buttonHockey.textContent = "Hockey-Info"
    buttonHockey.className = "MainButtons"

    const buttonSerials = document.createElement('button')
    buttonSerials.textContent = "Serials-Info"
    buttonSerials.className = "MainButtons"

    const buttonFood = document.createElement('button')
    buttonFood.textContent = "Food-Info"
    buttonFood.className = "MainButtons"

    classButtons.append(buttonHockey, buttonSerials, buttonFood)


    //-------------------------------
    const modalHockey = document.createElement("div")
    modalHockey.className = "modal-Hockey"


    const modalSerials = document.createElement("div")
    modalSerials.className = "modal-Serials"

    const modalFood = document.createElement("div")
    modalFood.className = "modal-Food"

    //----------------------------------------------------
    let modal = document.getElementById("my_modal");


    //-----------------------------------------------------
    const spanClose = document.createElement('span')
    spanClose.className = "close_modal_window"
    spanClose.textContent = "x"


    const newPHockey = document.createElement('p')
    newPHockey.textContent = 'Модальное окно для Хоккея'

    const newPSerials = document.createElement('p')
    newPSerials.textContent = 'Модальное окно для Сериалов'

    const newPFood = document.createElement('p')
    newPFood.textContent = 'Модальное окно для Еды'


    buttonHockey.addEventListener('click', () => {
        divModel.append(modalHockey)
        modalHockey.append(spanClose)
        modalHockey.append(newPHockey)
        modalHockey.append(buttonNext, buttonBehind)
        document.querySelectorAll(".modal-Serials").forEach(e => e.remove());
        document.querySelectorAll(".modal-Food").forEach(e => e.remove());
        modal.style.display = "block";
    });

    buttonSerials.addEventListener('click', () => {
        divModel.append(modalSerials)
        modalSerials.append(spanClose)
        modalSerials.append(newPSerials)
        modalSerials.append(buttonNext, buttonBehind)
        document.querySelectorAll(".modal-Hockey").forEach(e => e.remove());
        document.querySelectorAll(".modal-Food").forEach(e => e.remove());
        modal.style.display = "block";

    });

    buttonFood.addEventListener('click', () => {
        divModel.append(modalFood)
        modalFood.append(spanClose)
        modalFood.append(newPFood)
        modalFood.append(buttonNext, buttonBehind)
        document.querySelectorAll(".modal-Serials").forEach(e => e.remove());
        document.querySelectorAll(".modal-Hockey").forEach(e => e.remove());
        modal.style.display = "block";
    });

    spanClose.addEventListener('click', () => {
        modal.style.display = "none"
    });
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }


    const buttonNext = document.createElement('button')
    buttonNext.textContent = "Следующее Окно"
    buttonNext.className = "ButtonNext"
    const buttonBehind = document.createElement('button')
    buttonBehind.textContent = "Предыдущее Окно"
    buttonBehind.className = "ButtonBehind"





