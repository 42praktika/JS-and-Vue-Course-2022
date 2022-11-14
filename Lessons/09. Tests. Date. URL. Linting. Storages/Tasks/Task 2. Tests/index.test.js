import getIsFirstArrayCooler from './index';

describe('09.c.2 getIsFirstArrayCooler', () => {
    // Начало
    let arrOne
    let arrTwo

    beforeEach(() => {
        arrOne = [];
        arrTwo = [];
    })


    it('09.c.2.1 arrays of different lengths', () => {
        arrOne.push(0, 5, 18766);
        arrTwo.push(3, 17, 6, 57, 66767, 76);
        expect(getIsFirstArrayCooler(arrOne, arrTwo)).toBe(false);
    });

    it('09.c.2.2 empty arrays', () => {
        expect(getIsFirstArrayCooler(arrOne,arrTwo)).toBe(false);
    });

    it('09.c.2.3 first array is empty', () => {
        arrTwo.push(3, 17, 6, 57, 66767, 76);
        expect(getIsFirstArrayCooler(arrOne,arrTwo)).toBe(false);
    });

    it('09.c.2.4 second array is empty', () => {
        arrOne.push(0, 5, 18766);
        expect(getIsFirstArrayCooler(arrOne,arrTwo)).toBe(false);
    });

    it('09.c.2.5 arrays are equal', () => {
        arrOne.push(1, 5, 18766);
        arrTwo.push(1, 5, 18766);
        expect(getIsFirstArrayCooler(arrOne, arrTwo)).toBe(false);
    });

    it('09.c.2.6 arrays are equal', () => {
        arrOne.push(1, 5, 18766);
        arrTwo.push(1, 5, 18766);
        expect(getIsFirstArrayCooler(arrOne, arrTwo)).toBe(false);
    });

    it('09.c.2.7 second array being cooler', () => {
        arrOne = [1, 2, 3];
        arrTwo = [4, 5, 6];
    expect(getIsFirstArrayCooler(arrOne, arrTwo)).toBe(false);
    })

    it('09.c.2.7 first array being cooler', () => {
        arrOne = [4, 5, 6];
        arrTwo = [1, 2, 3];
        expect(getIsFirstArrayCooler(arrOne, arrTwo)).toBe(true);
    })


    // Конец
});
