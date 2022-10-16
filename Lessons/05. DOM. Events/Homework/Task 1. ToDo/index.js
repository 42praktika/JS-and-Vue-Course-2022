const setToDo = () => {
    // Начало
    const toDoMain = document.querySelector('.to-do__main');
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control form-control-lg';
    toDoMain.append(input);
    const addToPlansButton = document.createElement('button');
    addToPlansButton.className = 'btn btn-danger';
    addToPlansButton.textContent = 'Добавить в план';
    toDoMain.append(addToPlansButton);
    const addToCompleted = document.createElement('button');
    addToCompleted.className = 'btn btn-success';
    addToCompleted.textContent = 'Добавить в сделанные';
    toDoMain.append(addToCompleted);
    const toDoTasks = document.querySelector('.to-do__tasks');
    const initClickOnButton = (button, dataType) => {
        button.addEventListener('click', () => {
            const text = input.value
            input.value = ''
            const span = document.createElement('span');
            span.dataset.type = dataType
            span.textContent = text;
            toDoTasks.append(span);
            span.addEventListener('click', (event) => {
                event.target.remove();
            });
        });
    }
    initClickOnButton(addToPlansButton, 'planned');
    initClickOnButton(addToCompleted, 'completed');
    // Конец
};

export default setToDo;