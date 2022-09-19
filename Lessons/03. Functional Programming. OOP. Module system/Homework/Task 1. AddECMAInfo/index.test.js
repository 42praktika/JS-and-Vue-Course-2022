import addECMAInfo, { javaScriptData } from './index';

describe('03.h.1 addECMAInfo', () => {
    const correctDefaultObject = {
        name: 'JS',
        multiThread: false,
        born: 1995,
        cool: true,
    };
    const correctAnswer = {
        name: 'JS',
        multiThread: false,
        born: 1995,
        cool: true,
        currentECMA: 2023,
    };

    it('03.h.1.1 works correct', () => {
        expect(addECMAInfo()).toEqual(correctAnswer);
    });

    it('03.h.1.2 default object should not be mutated', () => {
        expect(correctDefaultObject).toEqual(javaScriptData);
    });
});