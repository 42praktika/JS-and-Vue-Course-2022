import generateDifference from './index';

describe('02.c.6 generateDifference', () => {
    const objectOne1 = { name: 'Ilon', surname: 'Mask', age: 50 };
    const objectTwo1 = { name: 'Ilon-genius', surname: 'Mask', children: [ 'someInfo' ] };
    const result1 = {
        name: 'changed',
        surname: 'unchanged',
        age: 'deleted',
        children: 'added',
    };

    const objectOne2 = { one: 'one', two: 'two', three: 'three', four: 'four' };
    const objectTwo2 = { three: 'new three', four: 'four', five: 'five' };
    const result2 = {
        one: 'deleted',
        two: 'deleted',
        three: 'changed',
        four: 'unchanged',
        five: 'added',
    };

    it('02.c.6.1 works correct', () => {
        expect(generateDifference(objectOne1, objectTwo1)).toEqual(result1);
        expect(generateDifference(objectOne2, objectTwo2)).toEqual(result2);
    });
});
