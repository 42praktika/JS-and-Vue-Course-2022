import reverseString from './index';

describe('01.h.2 reverseString', () => {
    it('01.h.2.1 works with common strings', () => {
        expect(reverseString('javascript')).toBe('tpircsavaj');
        expect(reverseString('console')).toBe('elosnoc');
        expect(reverseString('ab')).toBe('ba');
    });

    it('01.h.2.2 works with empty string', () => {
        expect(reverseString('')).toBe('');
    });
});
