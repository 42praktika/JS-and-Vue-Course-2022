/**
 * @jest-environment jsdom
 */
import setCounter from './index';

describe('05.c.1 setCounter', () => {
    document.body.innerHTML = '<div class="main"></div>';
    setCounter();

    const counter = document.querySelector('.main');

    it('05.c.1.1 button has been added', () => {
        const button = counter.querySelector('button');
        expect(button).not.toBeNull();

        const text = button.textContent;
        expect(text).toBe('Количество нажатий: 0');
    });

    it('05.c.1.2 click seven times', () => {
        const button = counter.querySelector('button');
        for (let i = 0; i < 7; i += 1) {
            button.click();
        }
        const text = button.textContent;
        expect(text).toEqual('Количество нажатий: 7');
    });

    it('05.c.1.2 click two more times', () => {
        const button = counter.querySelector('button');
        for (let i = 0; i < 2; i += 1) {
            button.click();
        }
        const text = button.textContent;
        expect(text).toEqual('Количество нажатий: 9');
    });
});
