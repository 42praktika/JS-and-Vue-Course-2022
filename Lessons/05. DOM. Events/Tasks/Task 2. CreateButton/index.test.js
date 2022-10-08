/**
 * @jest-environment jsdom
 */
import createButton from './index';

describe('05.c.2 createButton', () => {
    document.body.innerHTML = '<div class="main">\n' +
        '    <div class="button-container"></div>\n' +
        '    <div class="description"></div>\n' +
        '</div>';
    createButton();

    const main = document.querySelector('.main');
    const container = document.querySelector('.button-container');
    const description = main.querySelector('.description');

    it('05.c.2.1 button has been added', () => {
        const button = container.querySelector('button');
        expect(button).not.toBeNull();
    });

    it('05.c.2.2 button has correct text', () => {
        const button = container.querySelector('button');
        expect(button.textContent).toBe('Кнопка');
    });

    it('05.c.2.3 click has correct handler', () => {
        const button = main.querySelector('button');
        button.click();
        const textSpan = description.querySelector('span');
        expect(textSpan).not.toBeNull();
        expect(textSpan.textContent).toBe('Текст вставлен!');
    });
});
