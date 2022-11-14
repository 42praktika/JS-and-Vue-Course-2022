import getIsFirstArrayCooler from './index';

describe('09.c.2 getIsFirstArrayCooler', () => {
    // Начало
    it('check true result', () => {
        expect(getIsFirstArrayCooler([1,2,3], [2,3,4])).toBe(false);
    });
    it('check false result', () => {
        expect(getIsFirstArrayCooler([5,1,8], [8,2,10])).toBe(false);
    });
    it('check false result with different arrays lengths', () => {
        expect(getIsFirstArrayCooler([], [8,2,10])).toBe(false);
        expect(getIsFirstArrayCooler([1], [])).toBe(false);
    });
    // Конец
});
