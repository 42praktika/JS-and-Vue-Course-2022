const setToDo = () => {

    const elem = document.querySelector('.to-do__main');
    const input = document.createElement('input');
    input.classList.add('form-control', 'form-control-lg');
    input.placeholder = 'Введите наименование задачи';
    input.type = 'text';
    elem.append(input);

    const doTasks = document.querySelector('.to-do__tasks');
    const buttonPlan = document.createElement('button');
    buttonPlan.textContent = 'Добавить в план';
    buttonPlan.classList.add('btn', 'btn-danger');
    const buttonDone = document.createElement('button');
    buttonDone.textContent = 'Добавить в сделанные';
    buttonDone.classList.add('btn', 'btn-success');

    elem.append(buttonPlan, buttonDone);

    buttonPlan.addEventListener('click', () => {
        const span = document.createElement('span');
        span.textContent = input.value;
        span.dataset.type = 'planned';
        doTasks.append(span);
        input.value = '';
    });

    buttonDone.addEventListener('click', () => {
        const span = document.createElement('span');
        span.textContent = input.value;
        span.dataset.type = 'completed';
        doTasks.append(span);
        input.value = '';
    });

    doTasks.addEventListener('click', (event) => {
        const span = document.querySelector('span');
        span.remove();
    });

};

export default setToDo;