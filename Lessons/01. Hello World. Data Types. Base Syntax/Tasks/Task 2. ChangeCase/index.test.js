import changeCase from './index';

describe('01.c.2 changeCase', () => {
    it('01.c.2.1 changeCase', () => {
        expect(changeCase('case')).toEqual('CASE');
        expect(changeCase('loveJS')).toEqual('LOVEjs');
        expect(changeCase('')).toEqual('');
        expect(changeCase('Hello World')).toEqual('hELLO wORLD');
    });
});
