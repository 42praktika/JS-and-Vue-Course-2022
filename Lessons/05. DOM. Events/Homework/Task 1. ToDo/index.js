const setToDo = () => {
    // Начало
    const main = document.querySelector('.to-do__main');
    const toDoTasks = document.querySelector('.to-do__tasks');

    const input = document.createElement('input');
    input.className = 'form-control form-control-lg';
    const buttonPlan = document.createElement('button');
    main.append(input);

    buttonPlan.textContent = 'Добавить в план';
    buttonPlan.className = 'btn btn-danger';
    const buttonMade = document.createElement('button');
    buttonMade.textContent = 'Добавить в сделанные';
    buttonMade.className = 'btn btn-success';
    main.append(buttonPlan, buttonMade);

    buttonPlan.addEventListener('click', () => {
        const span = document.createElement('span');
        span.textContent = input.value;
        span.dataset.type = 'planned';
        toDoTasks.append(span);
        input.value = '';
    });

    buttonMade.addEventListener('click', () => {
        const span = document.createElement('span');
        span.textContent = input.value;
        span.dataset.type = 'completed';
        toDoTasks.append(span);
        input.value = '';
    });

    toDoTasks.addEventListener('click', (event) => {
        const span = document.querySelector('span')
        span.remove()
    })


    // Конец
};

export default setToDo;