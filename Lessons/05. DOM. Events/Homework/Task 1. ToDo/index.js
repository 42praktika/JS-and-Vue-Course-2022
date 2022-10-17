const setToDo = () => {
    const Buttons = {
        btnPlan: {
            type: 'planned',
            text: 'Добавить в план',
            className: 'btn btn-danger'
        },
        btnComp: {
            type: 'completed',
            text: 'Добавить в сделанные',
            className: 'btn btn-success'
        },
    };

    const listOfBtn = Object.values(Buttons)
    const toDoTasks = document.querySelector('.to-do__tasks');
    const toDoMain = document.querySelector('.to-do__main');
    const input = document.createElement('input');
    input.className = 'form-control form-control-lg';
    toDoMain.append(input);
    for (let i = 0; i < 2; i++) {
        const btn = document.createElement('button');
        btn.className = listOfBtn[i].className;
        btn.textContent = listOfBtn[i].text;
        toDoMain.append(btn);
        btn.addEventListener('click', (event) => {
            const task = document.createElement('span');
            toDoTasks.append(task);
            task.textContent = input.value;
            input.value = '';
            task.dataset.type = listOfBtn[i].type;
            task.addEventListener('click', (event) => {
                toDoTasks.removeChild(task);
            });
        });
    }
};

export default setToDo;