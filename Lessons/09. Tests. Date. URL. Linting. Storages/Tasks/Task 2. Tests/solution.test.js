import getIsFirstArrayCooler from './index';

describe('09.c.2 getIsFirstArrayCooler', () => {
    it('09.c.2.1 arrays of different length', () => {
        const arrOne = [ 1, 2, 3 ];
        const arrTwo = [ 1, 2, 3, 4 ];
        const isFirstArrayCooler = getIsFirstArrayCooler(arrOne, arrTwo);
        expect(isFirstArrayCooler).toBeFalsy();
    });

    it('09.c.2.2 arrays are equal priority', () => {
        const arrOne = [ 1, 1, 3, 42, 122, 30 ];
        const arrTwo = [ 1, 2, 3, 4, 10, 201 ];
        const isFirstArrayCooler = getIsFirstArrayCooler(arrOne, arrTwo);
        expect(isFirstArrayCooler).toBeFalsy();
    });

    it('09.c.2.3 first array is cooler', () => {
        const arrOne = [ 21, 10, 18, 53, 121, 90 ];
        const arrTwo = [ 1, 2, 3, 4, 10, 201 ];
        const isFirstArrayCooler = getIsFirstArrayCooler(arrOne, arrTwo);
        expect(isFirstArrayCooler).toBeTruthy();
    });

    it('09.c.2.4 second array is cooler', () => {
        const arrOne = [ 1, 2, 3, 4, 10, 201 ];
        const arrTwo = [ 21, 10, 18, 53, 121, 90 ];
        const isFirstArrayCooler = getIsFirstArrayCooler(arrOne, arrTwo);
        expect(isFirstArrayCooler).toBeFalsy();
    });
});