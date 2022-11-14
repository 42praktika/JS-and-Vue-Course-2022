import getIsFirstArrayCooler from './index';

describe('09.c.2 getIsFirstArrayCooler', () => {
    const arrayOne = []
    const arrayTwo = [1, 2, 3]
    const arrayThree = [1, 2]
    const arrayFour = [1, 2, 3, 4, 5, 6]
    const arrayFive = [1, 2, 3, 7, 8, 9]
    const arraySix = [1.1, 2.2, 3.3]
    const arraySeven = [4.4, 5.5, 6.6]
    const arrayWithStrings = [1, 2, 4, 'fjfjfjf', 5]

    it('c.9.2.1 false if different length', () => {
        expect(getIsFirstArrayCooler(arrayTwo, arrayThree)).toBe(false)
        expect(getIsFirstArrayCooler(arrayOne, arrayTwo)).toBe(false)
    });

    it('c.9.2.2 false if the arrays are the same ', () => {
        expect(getIsFirstArrayCooler(arrayFour, arrayFour)).toBe(false)
        expect(getIsFirstArrayCooler(arrayOne, arrayOne)).toBe(false)

    });

    it('c.9.2.3 false if one array is empty, another not', () => {
        expect(getIsFirstArrayCooler(arrayOne, arrayTwo)).toBe(false)
    });

    it('c.9.2.4 false if second array cooler than first array', () => {
        expect(getIsFirstArrayCooler(arrayFour, arrayFive)).toBe(false)
    });

    it('c.9.2.5 true if first array cooler than second array', () => {
        expect(getIsFirstArrayCooler(arrayFive, arrayFour)).toBe(true)
    });

    it('c.9.2.6 true if first array cooler than second array', () => {
        expect(getIsFirstArrayCooler(arrayFive, arrayFour)).toBe(true)
    });

    it('c.9.2.7 true if first array cooler than second array but all digits are not - integers', () => {
        expect(getIsFirstArrayCooler(arraySeven, arraySix)).toBe(true)
    });
    it('c.9.2.8 array with strings', () => {
        expect(getIsFirstArrayCooler(arrayWithStrings, arraySeven)).toThrowError()
    });
    //Это логично,что если будут строки,то ошибка,а не false
});
