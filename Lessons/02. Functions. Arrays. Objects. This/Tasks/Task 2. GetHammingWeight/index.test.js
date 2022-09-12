import getHammingWeight from './index';

describe('02.c.2 getHammingWeight', () => {
    it('02.c.2.1 works with 0', () => {
        expect(getHammingWeight(0)).toBe(0);
    });

    it('02.c.2.2 works with non-zero numbers', () => {
        expect(getHammingWeight(1)).toBe(1);
        expect(getHammingWeight(5)).toBe(2);
        expect(getHammingWeight(10)).toBe(2);
        expect(getHammingWeight(101)).toBe(4);
        expect(getHammingWeight(12345)).toBe(6);
    });
});