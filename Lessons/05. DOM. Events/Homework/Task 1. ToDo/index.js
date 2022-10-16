const setToDo = () => {
    const main = document.querySelector('.to-do__main');
    const tasksBlock = document.querySelector('.to-do__tasks');

    //Создаём input
    const input = document.createElement('input');
    input.className = "form-control form-control-lg";
    input.type = "text";
    input.placeholder = "Введите наименование задачи";

    //Создаём кнопку добавления в список
    const addToDoButton = document.createElement('button');
    addToDoButton.className = "btn btn-danger";
    addToDoButton.textContent = "Добавить в план";

    addToDoButton.addEventListener('click', (event) => {
        let task = document.createElement('span');
        task.textContent = input.value;
        task.dataset.type = "planned"

        tasksBlock.append(task);
        input.value = '';

        task.addEventListener('click', (event) => {
            event.target.remove();
        })
    });

    //Создаём кнопку добавления в сделанные
    const addToDoneButton = document.createElement('button');
    addToDoneButton.className = "btn btn-success";
    addToDoneButton.textContent = "Добавить в сделанные";

    addToDoneButton.addEventListener('click', (event) => {
        let task = document.createElement('span');
        task.textContent = input.value;
        task.dataset.type = "completed"

        tasksBlock.append(task);
        input.value = '';

        task.addEventListener('click', (event) => {
            event.target.remove();
        })
    });

    main.append(input, addToDoButton, addToDoneButton);


};

export default setToDo;