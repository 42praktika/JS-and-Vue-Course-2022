const setToDo = () => {
    // Начало
    const main = document.querySelector('.to-do__main');
    const tasksToDo = document.querySelector('div.to-do__tasks');
    const inputPlan = document.createElement('input');
    inputPlan.classList = ("form-control", "form-control-lg");

    const addPlan = document.createElement('button');
    addPlan.textContent = 'Добавить в план';
    addPlan.classList = ("btn", "btn-danger");

    const donePlan = document.createElement('button');
    donePlan.textContent = 'Добавить в сделанные';
    donePlan.classList = ("btn", "btn-success");

    addPlan.addEventListener('click', (event) => {
        let span = document.createElement('span');
        span.textContent = inputPlan.value;
        span.dataset.type = 'planned';
        tasksToDo.append(span);
        inputPlan.value = '';
    })

    donePlan.addEventListener('click', (event) => {
        let span = document.createElement('span');
        span.textContent = inputPlan.value;
        span.dataset.type = 'completed';
        tasksToDo.append(span);
        inputPlan.value = '';
    })

    main.append(inputPlan, addPlan, donePlan);
    // Конец
};

export default setToDo;