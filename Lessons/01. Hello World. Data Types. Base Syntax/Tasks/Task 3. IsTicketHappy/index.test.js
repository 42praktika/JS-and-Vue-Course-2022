import isTicketHappy from './index';

describe('01.c.3 isTicketHappy', () => {
    it('01.c.3.1 happy ticket', () => {
        expect(isTicketHappy('060006')).toBe(true);
        expect(isTicketHappy('123321')).toBe(true);
        expect(isTicketHappy('341800')).toBe(true);
        expect(isTicketHappy('812146')).toBe(true);
    });

    it('01.c.3.2 unhappy ticket', () => {
        expect(isTicketHappy('000001')).toBe(false);
        expect(isTicketHappy('123567')).toBe(false);
        expect(isTicketHappy('213612')).toBe(false);
    });
});
