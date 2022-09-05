import roundAndRootNumber from './index';

describe('01.c.4 roundAndRootNumber', () => {
    it('01.c.4.1', () => {
        expect(roundAndRootNumber(5843)).toBe('76.43');
        expect(roundAndRootNumber(18248)).toBe('135.08');
        expect(roundAndRootNumber(0)).toBe('0');
        expect(roundAndRootNumber(5)).toBe('2.23');
        expect(roundAndRootNumber(-100)).toBe('error');
    });
});
