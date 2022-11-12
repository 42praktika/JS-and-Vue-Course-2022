import getIsFirstArrayCooler from './index';

describe('09.c.2 getIsFirstArrayCooler', () => {
    // Начало
    const arrayOne = [1, 2, 3];
    const arrayTwo = [1, 2];
    const arrayThree = [];
    const arrayFour = [2, 3, 4];
    const arrayFive = [4, 5, 6];
    const arraySix = [2, 5, 4];
    const arraySeven = [1, 2, 3, 4];
    const arrayEight = [4, 3, 2, 1];

    it('09.c.2.1 false if arrays of different lengths', () => {
        expect(getIsFirstArrayCooler(arrayOne, arrayTwo)).toBe(false);
        expect(getIsFirstArrayCooler(arrayTwo, arrayOne)).toBe(false);
        expect(getIsFirstArrayCooler(arrayThree, arrayFour)).toBe(false);
    });

    it('09.c.2.2 false if arrays are the same', () => {
        expect(getIsFirstArrayCooler(arrayOne, arrayOne)).toBe(false);
        expect(getIsFirstArrayCooler(arrayThree, arrayThree)).toBe(false);
    });

    it('09.c.2.3 false if all elements of the first array are less', () => {
        expect(getIsFirstArrayCooler(arrayOne, arrayFive)).toBe(false);
        expect(getIsFirstArrayCooler(arrayOne, arrayFour)).toBe(false);
    });

    it('09.c.2.3 true if all elements of the first array are greater', () => {
        expect(getIsFirstArrayCooler(arrayFive, arrayOne)).toBe(true);
        expect(getIsFirstArrayCooler(arraySix, arrayOne)).toBe(true);
    });

    it('09.c.2.3 false if equal number of elements greater and less in first array', () => {
        expect(getIsFirstArrayCooler(arraySeven, arrayEight)).toBe(false);
    });

    it('09.c.2.3 true if more elements in first array greater', () => {
        expect(getIsFirstArrayCooler(arrayFive, arraySix)).toBe(true);
    });

    it('09.c.2.3 false if more elements in first array less', () => {
        expect(getIsFirstArrayCooler(arraySix, arrayFive)).toBe(false);
    });
    // Конец
});
