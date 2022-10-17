const createButton = () => {
    const element = document.querySelector('.button-container');
    const newButton = document.createElement('button')
    newButton.className='btn btn-primary'
    newButton.textContent="Кнопка"
    element.append(newButton)


    newButton.addEventListener("click",()=>{
        const element2=document.querySelector('.description')
        const newSpan=document.createElement('span')
        newSpan.textContent="Текст вставлен!"
        element2.append(newSpan)
    });
};

export default createButton;