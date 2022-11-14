import getIsFirstArrayCooler from './index';
import getBudget from "../../../02. Functions. Arrays. Objects. This/Tasks/Task 5. GetBudget";

describe('09.c.2 getIsFirstArrayCooler', () => {
    // Начало
    const arrayOne = [1, 4, 5, 1, 9, 8];
    const arrayTwo = [214, 214, 41, 123, 1, 4];
    const arraySmall = [4, 5, 1, 2, 3];
    const arrayEmpty = [];
    const arrayOfStrings = ['df0', '2', '3'];
    it('09.c.2 arrayOne and arrayTwo', () => {
        expect(getIsFirstArrayCooler(arrayOne, arrayTwo)).toBe(false);
    });
    it('09.c.2 arrayTwo and arraySmall', () => {
        expect(getIsFirstArrayCooler(arrayTwo, arraySmall)).toBe(false);
    });
    it('09.c.2 arrayEmpty', () => {
        expect(getIsFirstArrayCooler(arrayTwo, arrayEmpty)).toBe(false);
    });
    it('09.c.2 arrayTwo and arrayOne', () => {
        expect(getIsFirstArrayCooler(arrayTwo, arrayOne)).toBe(true);
    });
    it('09.c.2 arrayOfStrings', () => {
        expect(getIsFirstArrayCooler(arrayTwo, arrayOfStrings)).toBe("error");
    });
    it('09.c.2 string, not array', () => {
        expect(getIsFirstArrayCooler(arrayTwo, 'fds')).toBe("error");
    });
    it('09.c.2 equal arrays', () => {
        expect(getIsFirstArrayCooler(arrayTwo, arrayTwo)).toBe(false);
    });
    // Конец
});