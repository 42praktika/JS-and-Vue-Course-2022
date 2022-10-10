const setToDo = () => {
    // Начало
const toDoMain = document.querySelector('.to-do__main');
const input = document.createElement('input');
input.type='text';
input.classList.add('form-control','form-control-lg');
input.placeholder='Введите наименование задачи'
const firstButton = document.createElement('button');
const secondButton = document.createElement('button');
firstButton.classList.add('btn', 'btn-danger');
secondButton.classList.add('btn', 'btn-success');
firstButton.textContent='Добавить в план';
secondButton.textContent='Добавить в сделанные'
toDoMain.append(input,firstButton,secondButton);

firstButton.addEventListener('click', function (){
    const toDoTasks = document.querySelector('.to-do__tasks')
    const span=document.createElement('span');
    span.dataset.type = 'planned'
    span.textContent = document.querySelector('input').value
    toDoTasks.append(span)
    document.querySelector('input').value = ''

})
    secondButton.addEventListener('click', function (){
        const toDoTasks = document.querySelector('.to-do__tasks')
        const span=document.createElement('span');
        span.dataset.type = 'completed'
        span.textContent = document.querySelector('input').value
        toDoTasks.append(span)
        document.querySelector('input').value = ''
    })

    const toDoTasks = document.querySelector('.to-do__tasks')
   toDoTasks.addEventListener('click',function (){
       const span = document.querySelector('span')
       span.remove()
   })

    // Конец
};

export default setToDo;