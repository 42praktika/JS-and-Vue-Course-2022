import getIsFirstArrayCooler from './index';

describe('09.c.2 getIsFirstArrayCooler', () => {

    const arrayOne = [1, 2, 3]
    const arrayTwo = [1, 2]
    const arrayThree = []
    const arrayFour = [2, 3, 4]
    const arrayFive = [4, 5, 6]
    const arraySix = [2, 5, 4]

    it('09.c.2.1 false if arrays of different lengths', () => {
        expect(getIsFirstArrayCooler(arrayOne, arrayTwo)).toBe(false);
        expect(getIsFirstArrayCooler(arrayTwo, arrayOne)).toBe(false);
        expect(getIsFirstArrayCooler(arrayThree, arrayOne)).toBe(false);
    });

    it('09.c.2.1 false if the array is empty', () => {
        expect(getIsFirstArrayCooler(arrayThree, arrayThree)).toBe(false);
    });

    it('09.c.2.3 false if all elements of the first array are less', () => {
        expect(getIsFirstArrayCooler(arrayOne, arrayFour)).toBe(false);
        expect(getIsFirstArrayCooler(arrayOne, arrayFive)).toBe(false);
        expect(getIsFirstArrayCooler(arrayOne, arraySix)).toBe(false);
    });

    it('09.c.2.3 true if all elements of the first array are greater', () => {
        expect(getIsFirstArrayCooler(arrayFour, arrayOne)).toBe(true);
        expect(getIsFirstArrayCooler(arrayFive, arrayOne)).toBe(true);
        expect(getIsFirstArrayCooler(arraySix, arrayOne)).toBe(true);
    });

    it('09.c.2.3 true if more elements in first array greater', () => {
        expect(getIsFirstArrayCooler(arrayFive, arraySix)).toBe(true);
    });

    it('09.c.2.3 false if more elements in first array less', () => {
        expect(getIsFirstArrayCooler(arraySix, arrayFive)).toBe(false);
    });
});
