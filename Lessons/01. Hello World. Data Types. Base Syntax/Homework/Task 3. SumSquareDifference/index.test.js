import sumSquareDifference from './index';

describe('01.h.3 sumSquareDifference', () => {
    it('01.h.3 works correct', () => {
        expect(sumSquareDifference(1)).toEqual(0);
        expect(sumSquareDifference(5)).toEqual(170);
        expect(sumSquareDifference(10)).toEqual(2640);
        expect(sumSquareDifference(42)).toEqual(789824);
    });
});
