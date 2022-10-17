const setToDo = () => {
    // Начало
    const toDoMain = document.querySelector('.to-do__main');
    const input = document.createElement('input');
    input.classList.add('form-control', 'form-control-lg');
    input.placeholder = 'Введите наименование задачи';
    input.type = 'text';

    toDoMain.append(input);

    const toDoTasks = document.querySelector('.to-do__tasks');

    const buttonAddedToPlan = document.createElement('button');
    buttonAddedToPlan.textContent = 'Добавить в план';
    buttonAddedToPlan.classList.add('btn', 'btn-danger');

    const buttonAddedToCompleted = document.createElement('button');
    buttonAddedToCompleted.textContent = 'Добавить в сделанные';
    buttonAddedToCompleted.classList.add('btn', 'btn-success');

    toDoMain.append(buttonAddedToPlan, buttonAddedToCompleted);

    const addTask = (task, type) => {
        task.addEventListener('click', () => {
            const span = document.createElement('span');
            const spanText = input.value;
            span.dataset.type = type;
            span.textContent = spanText;

            span.addEventListener('click', () => {
                span.remove();
            })

            input.value = '';
            toDoTasks.append(span);
        })
    }

    addTask(buttonAddedToPlan, 'planned');
    addTask(buttonAddedToCompleted, 'completed');

    // Конец
};

export default setToDo;