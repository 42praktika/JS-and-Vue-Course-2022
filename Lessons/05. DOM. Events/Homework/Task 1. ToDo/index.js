const setToDo = () => {
    // Начало
    const el = document.querySelector('.to-do__main');
    const input = document.createElement('input');
    input.classList.add("form-control", "form-control-lg");

    const buttonPlan = document.createElement('button');
    buttonPlan.classList.add("btn", "btn-danger");
    buttonPlan.textContent = 'Добавить в план';

    const buttonDone = document.createElement('button');
    buttonDone.classList.add("btn", "btn-success");
    buttonDone.textContent = 'Добавить в сделанные';

    el.append(input, buttonPlan, buttonDone);

    const element = document.querySelector('.to-do__tasks');

    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', function () {
            const span = document.createElement('span');
            element.append(span);
            span.textContent = input.value;
            input.value = '';

            span.addEventListener('click', () => {
                span.remove();
            })

            if(button.classList.contains('btn-danger')){
                span.dataset.type = "planned"
            } else {
                span.dataset.type = "completed"
            }
        })
    });

    //Конец
};

export default setToDo;