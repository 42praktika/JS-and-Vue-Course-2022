const sinon = require('sinon');
import helloWorld from './index';

describe('01.c.0 helloWorld', () => {
    let spy;

    beforeEach(() => {
        spy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        spy.restore();
    });

    it('01.c.0.1 hello', () => {
        helloWorld();
        const actual = spy.args.join('\n');
        expect(actual).toBe('Hello World!');
    });
});