/**
 * @jest-environment jsdom
 */
import setToDo from './index';

describe('05.h.1 setToDo', () => {
    document.body.innerHTML = '<div class="to-do">\n' +
        '    <div class="to-do__header">\n' +
        '        <h2>Мой первое ToDo-приложение на js</h2>\n' +
        '    </div>\n' +
        '    <div class="to-do__main"></div>\n' +
        '    <div class="to-do__tasks"></div>\n' +
        '</div>';
    setToDo();

    const main = document.querySelector('.to-do__main');
    const tasks = document.querySelector('.to-do__tasks');

    it('05.h.1.1 input and button have been added', () => {
        const input = main.querySelector('input');
        expect(input).not.toBeNull();

        const buttons = main.querySelectorAll('button');
        const buttonsCount = [ ...buttons ].length;
        expect(buttonsCount).toBe(2);
    });

    it('05.h.1.2 add first task', () => {
        const input = main.querySelector('input');
        input.value = 'посмотреть Престиж';

        const planButton = main.querySelector('button');
        planButton.click();

        const currentTasks = tasks.querySelectorAll('span');

        const tasksCount = [ ...currentTasks ].length;
        expect(tasksCount).toBe(1);

        const firstTask = currentTasks[0];
        const firstTaskText = firstTask.textContent;
        expect(firstTaskText).toBe('посмотреть Престиж');

        const firstTaskType = firstTask.dataset.type;
        expect(firstTaskType).toBe('planned');

        const newInputValue = input.value;
        expect(newInputValue).toBe('');
    });

    it('05.h.1.3 add second task', () => {
        const input = main.querySelector('input');
        input.value = 'посмотреть Начало';

        const completedButton = main.querySelectorAll('button')[1];
        completedButton.click();

        const currentTasks = tasks.querySelectorAll('span');

        const tasksCount = [ ...currentTasks ].length;
        expect(tasksCount).toBe(2);

        const secondTask = currentTasks[1];
        const secondTaskText = secondTask.textContent;
        expect(secondTaskText).toBe('посмотреть Начало');

        const secondTaskType = secondTask.dataset.type;
        expect(secondTaskType).toBe('completed');

        const newInputValue = input.value;
        expect(newInputValue).toBe('');
    });

    it('05.h.1.4 delete first task', () => {
        const currentTasks = tasks.querySelectorAll('span');

        const firstTask = currentTasks[0];
        firstTask.click();

        const newTasks = tasks.querySelectorAll('span');
        const tasksCount = [ ...newTasks ].length;
        expect(tasksCount).toBe(1);

        const remainingTask = newTasks[0];
        const taskText = remainingTask.textContent;
        expect(taskText).toBe('посмотреть Начало');

        const remainingTaskType = remainingTask.dataset.type;
        expect(remainingTaskType).toBe('completed');
    });

    it('05.h.1.5 add another task', () => {
        const input = main.querySelector('input');
        input.value = 'посмотреть Интерстеллар';

        const completedButton = main.querySelectorAll('button')[1];
        completedButton.click();

        const currentTasks = tasks.querySelectorAll('span');

        const tasksCount = [ ...currentTasks ].length;
        expect(tasksCount).toBe(2);

        const secondTask = currentTasks[1];
        const secondTaskText = secondTask.textContent;
        expect(secondTaskText).toBe('посмотреть Интерстеллар');

        const secondTaskType = secondTask.dataset.type;
        expect(secondTaskType).toBe('completed');

        const newInputValue = input.value;
        expect(newInputValue).toBe('');
    });
});
