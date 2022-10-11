import reorderDigits from './index';

describe('03.c.1 reorderDigits', () => {
    it('03.c.1.1 no digits', () => {
        expect(reorderDigits('asc')).toEqual([]);
    });
    it('03.c.1.2 ascending', () => {
        expect(reorderDigits('asc', 10, 322, 100, 2414, 3)).toEqual([ 3, 10, 100, 322, 2414 ]);
        expect(reorderDigits('asc', 1)).toEqual([ 1 ]);
        expect(reorderDigits('asc', -100, 204, 131)).toEqual([ -100, 131, 204 ]);
    });
    it('03.c.1.3 descending', () => {
        expect(reorderDigits('desc', 10, 322, 100, 2414, 3)).toEqual([ 2414, 322, 100, 10, 3 ]);
        expect(reorderDigits('desc', 201, -100, 42, 332)).toEqual([ 332, 201, 42, -100 ]);
    });
});
