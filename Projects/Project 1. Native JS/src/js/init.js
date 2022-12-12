const init=()=>{
    const buttons=document.querySelector('.buttons')

    const modalDogs=document.querySelector('.modal--dogs')
    const modalDigits=document.querySelector('.modal--digits')
    const modalWhatToDo=document.querySelector('.modal--whattodo')


    const buttonDog=document.createElement('button')
    buttonDog.textContent='Собаки'
    buttonDog.classList.add('button','dogs')

    const buttonDigits=document.createElement('button')
    buttonDigits.textContent='Факты про числа'
    buttonDigits.classList.add('button','digits')

    const buttonWhatToDo=document.createElement('button')
    buttonWhatToDo.textContent='Рандомное дело'
    buttonWhatToDo.classList.add('button','whattodo')

    buttons.append(buttonDog,buttonDigits,buttonWhatToDo)



    const buttonChangeDog=document.createElement('button')
    buttonChangeDog.textContent='Получить рандомную собаку!'
    buttonChangeDog.className='btnChangeDog'
    modalDogs.append(buttonChangeDog)

    let imgDog=document.createElement('img')
    imgDog.setAttribute('src','https://images.dog.ceo/breeds/buhund-norwegian/hakon1.jpg')
    imgDog.id='imgDog'
    modalDogs.append(imgDog)


    let h3WhatToDo=document.createElement('h3')
    h3WhatToDo.textContent='Чем заняться, когда скучно? Нажми на кнопку и узнай!'
    h3WhatToDo.className='h3WhatToDo'
    const buttonChangeWhatTodo=document.createElement('button')
    buttonChangeWhatTodo.className='buttonChangeWhatTodo'
    buttonChangeWhatTodo.textContent='Получить рандомное дело'
    modalWhatToDo.append(h3WhatToDo,buttonChangeWhatTodo)

    const input=document.createElement('input')
    input.className='input'
    input.placeholder='Введите число'


    let h3InfoDigit=document.createElement('h3')
    h3InfoDigit.className='h3InfoDigit'
    h3InfoDigit.textContent='Получите информацию о числе'


    const buttonGetInfoDigits=document.createElement('button')
    buttonGetInfoDigits.className='btnInfoDigits'
    buttonGetInfoDigits.textContent='Получить информацию о числе'

    modalDigits.append(input,buttonGetInfoDigits,h3InfoDigit)

}
export default init;
