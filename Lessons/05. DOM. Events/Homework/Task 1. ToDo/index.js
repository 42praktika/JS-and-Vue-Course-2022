const setToDo = () => {
    const to_do_main = document.querySelector('.to-do__main')
    const input = document.createElement('input')
    input.type = 'text'
    input.classList.add('form-control', 'form-control-lg')
    input.label = 'Введите наименование задачи'
    const first_button = document.createElement('button')
    const second_button = document.createElement('button')
    first_button.classList.add('btn', 'btn-danger')
    second_button.classList.add('btn', 'btn-success')
    first_button.textContent = 'Добавить в план'
    second_button.textContent = 'Добавить в сделанные'
    to_do_main.append(input, first_button, second_button)

    first_button.addEventListener('click', (event) => {
        const to_do_tasks = document.querySelector('.to-do__tasks')
        const span = document.createElement('span');
        span.dataset.type = 'planned'
        span.textContent = document.querySelector('input').value
        to_do_tasks.append(span)
        document.querySelector('input').value = ''
    })

    second_button.addEventListener('click', (event) => {
        const to_do_tasks = document.querySelector('.to-do__tasks')
        const span = document.createElement('span');
        span.dataset.type = 'completed'
        span.textContent = document.querySelector('input').value
        to_do_tasks.append(span)
        document.querySelector('input').value = ''
    })

    const to_do_tasks = document.querySelector('.to-do__tasks')
    to_do_tasks.addEventListener('click', (event) => {
        const span = document.querySelector('span')
        span.remove()
    })
};

export default setToDo;