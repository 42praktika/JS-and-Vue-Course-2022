/**
 * @jest-environment jsdom
 */

import fetchData from './index';

const simulateInputValueChange = (value) => {
    const input = document.querySelector('.form-control');
    input.value += value;
    const event = new Event('input');
    input.dispatchEvent(event);
};

describe('07.c.1 fetchData', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {
    });

    document.body.innerHTML = '<div class="main">\n' +
        '    <input\n' +
        '        class="form-control"\n' +
        '        placeholder="Я хочу найти..."\n' +
        '    />\n' +
        '</div>';

    fetchData();

    it('07.c.1.1 works correct', () => {
        jest.useFakeTimers();

        simulateInputValueChange('раз ');
        jest.advanceTimersByTime(100);
        expect(window.alert).not.toBeCalled();

        simulateInputValueChange('два ');
        jest.advanceTimersByTime(100);
        expect(window.alert).not.toBeCalled();

        simulateInputValueChange('три ');
        jest.advanceTimersByTime(100);
        expect(window.alert).not.toBeCalled();

        simulateInputValueChange('четыре! ');
        jest.advanceTimersByTime(1100);
        expect(window.alert).toBeCalledWith('Ищем: раз два три четыре! ');


        simulateInputValueChange('пять ');
        jest.advanceTimersByTime(100);
        expect(window.alert).toHaveBeenCalledTimes(1);


        simulateInputValueChange('шесть!');
        jest.advanceTimersByTime(1100);
        expect(window.alert).toHaveBeenNthCalledWith(2, 'Ищем: раз два три четыре! пять шесть!');
    });
});
