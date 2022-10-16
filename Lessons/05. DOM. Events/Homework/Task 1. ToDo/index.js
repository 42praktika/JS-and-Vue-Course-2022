const setToDo = () => {
    // Начало
    const mainElement = document.querySelector('.to-do__main');
    const inputElement = document.createElement('input');
    inputElement.className = 'form-control form-control-lg';
    const buttonOfMakingPlan = document.createElement('button');
    const buttonOfFinishingPlan = document.createElement('button');
    buttonOfMakingPlan.textContent = 'Добавить в план';
    buttonOfMakingPlan.className = 'btn btn-danger';
    buttonOfFinishingPlan.textContent = 'Добавить в сделанные';
    buttonOfFinishingPlan.className = 'btn btn-success';
    mainElement.append(inputElement, buttonOfMakingPlan, buttonOfFinishingPlan);

    const tasksElement = document.querySelector('.to-do__tasks');

    buttonOfMakingPlan.addEventListener('click', () => {
        const span = document.createElement('span');
        span.textContent = inputElement.value;
        span.dataset.type = 'planned';
        tasksElement.append(span);
        inputElement.value = '';
    });

    buttonOfFinishingPlan.addEventListener('click', () => {
        const span = document.createElement('span');
        span.textContent = inputElement.value;
        span.dataset.type = 'completed';
        tasksElement.append(span);
        inputElement.value = '';
    });

    tasksElement.addEventListener('click', (event) => {
        const currentElement = event.target;
        currentElement.remove();
    })
    // Конец
};

export default setToDo;
