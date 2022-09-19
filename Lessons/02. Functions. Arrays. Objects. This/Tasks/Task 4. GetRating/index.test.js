import getRating from './index';

describe('02.c.4 getRating', () => {
    it('02.c.4.1 works correct', () => {
        expect(getRating({ likes: 1, dislikes: 43 })).toBe(-42);
        expect(getRating({ likes: 15, dislikes: 5 })).toEqual(10);
        expect(getRating({ likes: 122, dislikes: 122 })).toEqual(0);
    });
});
