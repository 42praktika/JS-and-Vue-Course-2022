import getDaysAmount from './index';

describe('09.h.1 getDaysAmount', () => {
    it('09.h.1.1 get days of may in 1918', () => {
        const may1918Days = getDaysAmount('May', 1918);
        expect(may1918Days).toBe(31);
    });

    it('09.h.1.2 get days of february in 1564', () => {
        const february1564Days = getDaysAmount('February', 1564);
        expect(february1564Days).toBe(29);
    });

    it('09.h.1.3 get days of february in 1755', () => {
        const february1755Days = getDaysAmount('February', 1755);
        expect(february1755Days).toBe(28);
    });

    it('09.h.1.4 get days of december in 1997', () => {
        const december1997Days = getDaysAmount('December', 1997);
        expect(december1997Days).toBe(31);
    });

    it('09.h.1.5 get days of january in 2021', () => {
        const january2021Days = getDaysAmount('January', 2021);
        expect(january2021Days).toBe(31);
    });

    it('09.h.1.6 get days of september in 1984', () => {
        const september1984Days = getDaysAmount('September', 1984);
        expect(september1984Days).toBe(30);
    });

    it('09.h.1.7 get days of nonexistent month', () => {
        const nonexistentMonthDays = getDaysAmount('Catober', 2021);
        expect(nonexistentMonthDays).toBe('error');
    });
});