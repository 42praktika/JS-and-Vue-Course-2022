import getIsFirstArrayCooler from './index';

describe('09.c.2 getIsFirstArrayCooler', () => {
    let array1 = [];
    let array2 = [];

    it('is false for empty arrays', () => {
        expect(getIsFirstArrayCooler(array1, array2)).toBe(false);
    });

    it('is false when first array is empty', () => {
        array1 = [];
        array2 = [1, 2, 3];
        expect(getIsFirstArrayCooler(array1, array2)).toBe(false);
    });

    it('is false when second array is empty', () => {
        array1 = [1, 2, 3];
        array2 = [];
        expect(getIsFirstArrayCooler(array1, array2)).toBe(false);
    });

    it('is false when first array smaller then second', () => {
        array1 = [1, 2, 3];
        array2 = [1, 2, 3, 4, 5];
        expect(getIsFirstArrayCooler(array1, array2)).toBe(false);
    });

    it('is false when second array smaller then first', () => {
        array1 = [1, 2, 3, 4, 5];
        array2 = [1, 2, 3];
        expect(getIsFirstArrayCooler(array1, array2)).toBe(false);
    });

    it('is false when second array is cooler in all digits', () => {
        array1 = [1, 2, 3, 4, 5];
        array2 = [6, 7, 8, 9, 10];
        expect(getIsFirstArrayCooler(array1, array2)).toBe(false);
    });

    it('is false when cooler in half digits', () => {
        array1 = [1, 7, 3, 9, 5, 11];
        array2 = [6, 2, 8, 4, 10, 0];
        expect(getIsFirstArrayCooler(array1, array2)).toBe(false);
    });

    it('is false when cooler in less then half digits', () => {
        array1 = [1, 0, 3, 9, 5, 11];
        array2 = [6, 2, 8, 4, 10, 0];
        expect(getIsFirstArrayCooler(array1, array2)).toBe(false);
    });

    it('is false with equal arrays', () => {
        array1 = [1, 2, 3, 4, 5];
        array2 = [1, 2, 3, 4, 5];
        expect(getIsFirstArrayCooler(array1, array2)).toBe(false);
    });

    it('is true when first array is cooler', () => {
        array1 = [15, 7, 3, 9, 5, 11];
        array2 = [6, 2, 8, 4, 10, 0];
        expect(getIsFirstArrayCooler(array1, array2)).toBe(true);
    });

    it('is working with doubles', () => {
        array1 = [15.12, 7.7, 5.0];
        array2 = [6.3, 7.6, 5.0];
        expect(getIsFirstArrayCooler(array1, array2)).toBe(true);
    });

    // it('is working with not numbers', () => {
    //     array1 = [[15, 12], [2, 5], [4, 3]];
    //     array2 = [[1], [2], [3, 4]];
    //     expect(getIsFirstArrayCooler(array1, array2)).toBe(true);
    // });
});
