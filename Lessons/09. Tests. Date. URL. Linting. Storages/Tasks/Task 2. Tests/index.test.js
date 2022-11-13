import getIsFirstArrayCooler from './index';

describe('09.c.2 getIsFirstArrayCooler', () => {
    // Начало
    let arr1 = [];
    let arr2 = [];
    it('09.c.2 with first array being empty', () => {
        arr1 = [];
        arr2 = [1, 3];
        expect(getIsFirstArrayCooler(arr1, arr2)).toBe(false);
    });

    it('09.c.2 with second array being empty', () => {
        arr1 = [1, 3];
        arr2 = [];
        expect(getIsFirstArrayCooler(arr1, arr2)).toBe(false);
    });

    it('09.c.2 with two empty arrays', () => {
        arr1 = [];
        arr2 = [];
        expect(getIsFirstArrayCooler(arr1, arr2)).toBe(false);
    });

    it('09.c.2 with first array being bigger than the second', () => {
        arr1 = [1, 2, 5];
        arr2 = [1, 3];
        expect(getIsFirstArrayCooler(arr1, arr2)).toBe(false);
    });

    it('09.c.2 with first array being smaller than the second', () => {
        arr1 = [1, 2];
        arr2 = [1, 3, 5];
        expect(getIsFirstArrayCooler(arr1, arr2)).toBe(false);
    });

    it('09.c.2 with equal arrays', () => {
        arr1 = [1, 3, 5, 6, 7];
        arr2 = [1, 3, 5, 6, 7];
        expect(getIsFirstArrayCooler(arr1, arr2)).toBe(false);
    });

    it('09.c.2 with second array being cooler', () => {
        arr1 = [1, 3, 5];
        arr2 = [2, 3, 7];
        expect(getIsFirstArrayCooler(arr1, arr2)).toBe(false);
    })

    it('09.c.2 with first array being cooler', () => {
        arr1 = [2, 5, 15, 22];
        arr2 = [2, 4, 7, 8];
        expect(getIsFirstArrayCooler(arr1, arr2)).toBe(true);
    })

    it('09.c.2 with first float array being cooler', () => {
        arr1 = [2.3, 5.7, 15.9, 22.1];
        arr2 = [2.7, 4.5, 7.2, 8.3];
        expect(getIsFirstArrayCooler(arr1, arr2)).toBe(true);
    })

    it('09.c.2 with second float array being cooler', () => {
        arr1 = [1.3, 3.5, 5.4, 8.9];
        arr2 = [3.2, 4.7, 7.3, 8.66];
        expect(getIsFirstArrayCooler(arr1, arr2)).toBe(false);
    })
    // Конец
});
