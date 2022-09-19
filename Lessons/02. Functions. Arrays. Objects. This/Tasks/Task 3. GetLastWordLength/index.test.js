import getLastWordLength from './index';

describe('02.c.3 getLastWordLength', () => {
    it('02.c.3.1 works correct', () => {
        expect(getLastWordLength('')).toBe(0);
        expect(getLastWordLength('hi')).toBe(2);
        expect(getLastWordLength('man in black')).toBe(5);
        expect(getLastWordLength('hello, world!')).toBe(6);
        expect(getLastWordLength('hello, wOrLD!  ')).toBe(6);
    });
});
