import getIsFirstArrayCooler from './index';

describe('09.c.2 getIsFirstArrayCooler', () => {
    // Начало
    let arr1;
    let arr2;

    beforeEach(() => {
        arr1= [];
        arr2= [];
    })


    it('09.c.2.1 getIsFirstArrayCooler is defined', () => {
        arr1.push(1, 2, 3);
        arr2.push(1, 2, 4);
        expect(getIsFirstArrayCooler(arr1, arr2)).toBeDefined();
    });

    it('09.c.2.2 work correct with empty arrays', () => {
        expect(getIsFirstArrayCooler(arr1,arr2)).toBe(false);
    });

    it('09.c.2.3 work correct when first array is empty', () => {
        arr2.push(1);
        expect(getIsFirstArrayCooler(arr1,arr2)).toBe(false);
    });

    it('09.c.2.4 work correct when second array is empty', () => {
        arr1.push(1);
        expect(getIsFirstArrayCooler(arr1,arr2)).toBe(false);
    });

    it('09.c.2.5 work correct with arrays of different lengths', () => {
        arr1.push(1);
        arr2.push(2, 3, 4);
        expect(getIsFirstArrayCooler(arr1,arr2)).toBe(false);
    });

    it('09.c.2.6 work correct when second array is cooler than first', () => {
        arr1.push(1, 4, 3);
        arr2.push(2, 3, 4);
        expect(getIsFirstArrayCooler(arr1,arr2)).toBe(false);
    });

    it('09.c.2.7 work correct with equal arrays', () => {
        arr1.push(1, 2, 3);
        arr2.push(1, 2, 3);
        expect(getIsFirstArrayCooler(arr1,arr2)).toBe(false);
    });

    it('09.c.2.8 work correct when first array is cooler than second', () => {
        arr1.push(3, 4, 8);
        arr2.push(1, 6, 3);
        expect(getIsFirstArrayCooler(arr1,arr2)).toBe(true);
    });

    it('09.c.2.9 work correct with float numbers when first array is cooler than second', () => {
        arr1.push(3.1 ,4.8 ,8.1);
        arr2.push(1.2, 6.9, 3.2);
        expect(getIsFirstArrayCooler(arr1,arr2)).toBe(true);
    });

    it('09.c.2.10 work correct with float numbers when second array is cooler than first', () => {
        arr1.push(3.1 ,4.8 ,8.1);
        arr2.push(4.2, 6.9, 3.2);
        expect(getIsFirstArrayCooler(arr1,arr2)).toBe(false);
    });
    // Конец
});
