import getIsFirstArrayCooler from './index';

describe('09.c.2 getIsFirstArrayCooler', () => {
    // Начало
    let arrayNumsOne
    let arrayNumsTwo
    beforeEach(() => {
         arrayNumsOne = [];
         arrayNumsTwo = [];
    })

    it('c.8.2.1 getIsFirstArrayCooler work correct with arrays where length 0', () => {
        expect(getIsFirstArrayCooler(arrayNumsOne, arrayNumsTwo)).toBe(false);
    });

    it('c.8.2.2 getIsFirstArrayCooler work correct with arrays where length is equal', () => {
        arrayNumsOne = [1, 2, 3, 4, 5];
        arrayNumsTwo = [1, 2, 3, 4, 5];
        expect(getIsFirstArrayCooler(arrayNumsOne, arrayNumsTwo)).toBe(false);
    })

    it('c.8.2.3 getIsFirstArrayCooler work correct with arrays where one array is empty and second array is not empty', () => {
        arrayNumsOne = [];
        arrayNumsTwo = [1, 2, 3, 4, 5];
        expect(getIsFirstArrayCooler(arrayNumsOne, arrayNumsTwo)).toBe(false);
    })

    it('c.8.2.4 getIsFirstArrayCooler work correct with arrays where one array is not empty and second array is empty', () => {
        arrayNumsOne = [1, 2, 3, 4, 5];
        arrayNumsTwo = [];
        expect(getIsFirstArrayCooler(arrayNumsOne, arrayNumsTwo)).toBe(false);
    })

    it('c.8.2.5 getIsFirstArrayCooler work correct when arrays of different lengths', () => {
        arrayNumsOne = [1, 2, 3, 4, 5];
        arrayNumsTwo = [1, 2, 3];
        expect(getIsFirstArrayCooler(arrayNumsOne, arrayNumsTwo)).toBe(false);
    })

    it('c.8.2.6 getIsFirstArrayCooler work correct when arrays of different lengths', () => {
        arrayNumsOne = [1, 2, 3];
        arrayNumsTwo = [1, 2, 3, 4, 5];
        expect(getIsFirstArrayCooler(arrayNumsOne, arrayNumsTwo)).toBe(false);
    })

    it('c.8.2.7 getIsFirstArrayCooler work correct when second array cooler than first', () => {
        arrayNumsOne = [1, 2, 3, 4, 5];
        arrayNumsTwo = [1, 2, 3, 5, 6];
        expect(getIsFirstArrayCooler(arrayNumsOne, arrayNumsTwo)).toBe(false);
    })

    it('c.8.2.8 getIsFirstArrayCooler work correct when first array cooler than second ', () => {
        arrayNumsOne = [1, 2, 3, 5, 6];
        arrayNumsTwo = [1, 2, 3, 4, 5];
        expect(getIsFirstArrayCooler(arrayNumsOne, arrayNumsTwo)).toBe(true);
    })

    it('c.8.2.9 getIsFirstArrayCooler work correct with float numbers when first array is cooler than second', () => {
        arrayNumsOne = [2.1 ,3.1 ,4.1];
        arrayNumsTwo = [1.1, 2.1, 3.1];
        expect(getIsFirstArrayCooler(arrayNumsOne,arrayNumsTwo)).toBe(true);
    });

    it('c.8.2.10 getIsFirstArrayCooler work correct with float numbers when second array is cooler than first', () => {
        arrayNumsOne = [2.1 ,3.1 ,4.1];
        arrayNumsTwo = [3.1, 2.1, 5.1];
        expect(getIsFirstArrayCooler(arrayNumsOne,arrayNumsTwo)).toBe(false);
    });

    // Конец
});
