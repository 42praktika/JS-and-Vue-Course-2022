import getBoomerangsCount from './index';

describe('02.h.2 getBoomerangsCount', () => {
    it('02.h.2.1 should be false', () => {
        expect(getBoomerangsCount([ 10, 11, 12, 13 ])).toBe(0);
        expect(getBoomerangsCount([ 10, 11, 10, 13 ])).toEqual(1);
        expect(getBoomerangsCount([ 9, 5, 9, 5, 1, 1, 1 ])).toEqual(2);
        expect(getBoomerangsCount([ 9, 5, 4, 5, 4, 1, 4 ])).toEqual(3);
        expect(getBoomerangsCount([])).toEqual(0);
    });
});
