const sinon = require('sinon');
import itisCool from './index';

describe('01.c.1 itisCool', () => {
    const itis = 'Itis';
    const cool = 'Cool';
    const itisAndCool = 'ItisCool';

    const range = [
        1, 2, itis, 4, cool, itis, 7, 8, itis, cool,
        11, itis, 13, 14, itisAndCool, 16, 17, itis, 19, cool,
        itis, 22, 23, itis, cool, 26, itis, 28, 29, itisAndCool,
        31, 32, itis, 34, cool, itis, 37, 38, itis, cool,
        41, itis, 43, 44, itisAndCool, 46, 47, itis, 49, cool,
        itis, 52, 53, itis, cool, 56, itis, 58, 59, itisAndCool,
        61, 62, itis, 64, cool, itis, 67, 68, itis, cool,
        71, itis, 73, 74, itisAndCool, 76, 77, itis, 79, cool,
        itis, 82, 83, itis, cool, 86, itis, 88, 89, itisAndCool,
        91, 92, itis, 94, cool, itis, 97, 98, itis, cool,
    ];

    let spy;

    beforeEach(() => {
        spy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        spy.restore();
    });

    it('01.c.1.1 range: 1 - 35', () => {
        itisCool(1, 35);
        const expected = range.slice(0, 35).join('\n');
        const actual = spy.args.join('\n');
        expect(actual).toBe(expected);
    });

    it('01.c.1.2 range: 41 - 60', () => {
        itisCool(41, 60);
        const expected = range.slice(40, 60).join('\n');
        const actual = spy.args.join('\n');
        expect(actual).toBe(expected);
    });

    it('01.c.1.3 range: 77 - 97', () => {
        itisCool(77, 97);
        const expected = range.slice(76, 97).join('\n');
        const actual = spy.args.join('\n');
        expect(actual).toBe(expected);
    });

    it('01.c.1.4 one element', () => {
        itisCool(45, 45);
        expect(spy.withArgs('ItisCool').calledOnce).toBe(true);
    });

    it('01.c.1.5 console.log not called', () => {
        itisCool(35, 25);
        expect(spy.notCalled).toBe(true);
    });
});