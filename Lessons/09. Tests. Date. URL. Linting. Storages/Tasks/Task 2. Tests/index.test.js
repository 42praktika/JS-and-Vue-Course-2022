import getIsFirstArrayCooler from './index';

describe('09.c.2 getIsFirstArrayCooler', () => {
    // Начало
    const arrayOneTestFirst = [1, 2, 3, 4, 5];
    const arrayTwoTestFirst = [2, 3, 4, 5];

    const arrayOneTestSecond = [];
    const arrayTwoTestSecond = [];

    const arrayOneTestThird = [2, 3, 4, 5];
    const arrayTwoTestThird = [1, 2, 3, 4];

    const arrayOneTestFourth = [1, 2, 3, 4];
    const arrayTwoTestFourth = [2, 3, 4, 5];

    const arrayOneTestFifth = [1, 2, 3, 4];
    const arrayTwoTestFifth = [1, 2, 3, 4];

    it('09.c.2 works correct with different length', () => {
        expect(getIsFirstArrayCooler(arrayOneTestFirst, arrayTwoTestFirst)).toBe(false);
    });

    it('09.c.2 works correct with empty arrays', () => {
        expect(getIsFirstArrayCooler(arrayOneTestSecond, arrayTwoTestSecond)).toBe(false);
    });

    it('09.c.2 first array is cooler than second array', () => {
        expect(getIsFirstArrayCooler(arrayOneTestThird, arrayTwoTestThird)).toBe(true);
    });

    it('09.c.2 first array is not cooler than second array', () => {
        expect(getIsFirstArrayCooler(arrayOneTestFourth, arrayTwoTestFourth)).toBe(false);
    });

    it('09.c.2 identical arrays', () => {
        expect(getIsFirstArrayCooler(arrayOneTestFifth, arrayTwoTestFifth)).toBe(false);
    });
    // Конец
});
