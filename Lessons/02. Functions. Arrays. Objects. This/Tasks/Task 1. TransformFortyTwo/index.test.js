import transformFortyTwo from './index';

describe('02.c.1 transformFortyTwo', () => {
    it('02.c.1.1 works with non-empty arrays', () => {
        expect(transformFortyTwo([ 1, 2, 7 ])).toEqual([ 1, 2, 7 ]);
        expect(transformFortyTwo([ 12, 42, 25 ])).toEqual([ 12, 'forty two!', 25 ]);
        expect(transformFortyTwo([ 424, 4235, 882, 32 ])).toEqual([ 424, 4235, 'forty two!', 32 ]);
        expect(transformFortyTwo([ 54525, 1764, 4200, 43 ])).toEqual([ 54525, 'forty two!', 'forty two!', 43 ]);
    });

    it('02.c.1.2 works with empty arrays', () => {
        expect(transformFortyTwo([]).sort()).toEqual([].sort());
    });
});
