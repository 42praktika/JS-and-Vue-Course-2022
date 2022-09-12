import getBudget from './index';

describe('02.c.5 getBudget', () => {
    const arrayOne = [
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve", age: 32, budget: 40000 },
        { name: "Martin", age: 16, budget: 2700 },
    ];
    const arrayTwo = [
        { name: "Elena", age: 5, budget: 223300 },
        { name: "Alexey", age: 85, budget: 23000 },
        { name: "Alina", age: 23, budget: 100000 },
    ];

    it('02.c.5.1 works correct', () => {
        expect(getBudget(arrayOne)).toBe(65700);
        expect(getBudget(arrayTwo)).toEqual(346300);
    });
});
