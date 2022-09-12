import moreFunction from './index';

describe('02.h.3 moreFunction', () => {
    it('02.h.3.1 should be toEqual', () => {
        const newFunctionOne = moreFunction(2);
        expect(newFunctionOne([ 10, 11, 12, 100 ])).toEqual([ 5, 5.5, 6, 50 ]);

        const newFunctionTwo = moreFunction(5);
        expect(newFunctionTwo([ 100, 0, 10, 17 ])).toEqual([ 20, 0, 2, 3.4 ]);

        const newFunctionThree = moreFunction(1);
        expect(newFunctionThree([ 100, 0, 10, 17 ])).toEqual([ 100, 0, 10, 17 ]);
    });
});
