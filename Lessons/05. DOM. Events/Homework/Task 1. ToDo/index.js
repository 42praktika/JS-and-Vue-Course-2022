const setToDo = () => {

    const eventFuncPlanned = () => {
        const spanElement = document.createElement('span');
        if (inputForTask.value === '') {
            alert('Внимание! Вы ввели пустой текст')
        } else {
            spanElement.textContent = inputForTask.value;
            spanElement.dataset.type = 'planned';
            toDoTasks.append(spanElement);
            inputForTask.value = '';
        }
    }

    const eventFuncCompleted = () => {
        const spanElement = document.createElement('span');
        if (inputForTask.value === '') {
            alert('Внимание! Вы ввели пустой текст')
        } else {
            spanElement.textContent = inputForTask.value;
            spanElement.dataset.type = 'completed';
            toDoTasks.append(spanElement);
            inputForTask.value = '';
        }
    }
    // Начало
    const toDoMain = document.querySelector('.to-do__main');
    const toDoTasks = document.querySelector('.to-do__tasks');


    const inputForTask = document.createElement('input');
    inputForTask.type = 'text';
    inputForTask.setAttribute('placeholder', 'Введите наименование задачи');
    inputForTask.classList.add('form-control', 'form-control-lg');

    const buttonDanger = document.createElement('button');
    buttonDanger.classList.add('btn', 'btn-danger');
    buttonDanger.textContent = 'Добавить в план';

    const buttonSuccess = document.createElement('button');
    buttonSuccess.classList.add('btn', 'btn-success');
    buttonSuccess.textContent = 'Добавить в сделанные';

    toDoMain.append(inputForTask, buttonDanger, buttonSuccess);

    buttonDanger.addEventListener('click', eventFuncPlanned);
    buttonSuccess.addEventListener('click', eventFuncCompleted);
    toDoTasks.addEventListener('click', (event) => {
        event.target.remove();
    })
    // Конец
};

export default setToDo;