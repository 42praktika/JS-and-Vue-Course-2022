import fs from 'fs';
import path from 'path';
import writeSumSync from './index';

const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);

describe('07.c.2 writeSumSync', () => {
    it('07.c.2.1 works with files "one.txt" and "two.txt"', () => {
        writeSumSync(getPath('/one.txt'), getPath('/two.txt'), getPath('/result.txt'));

        const contentFileOne = fs.readFileSync(getPath('/one.txt'), 'utf-8');
        expect(contentFileOne).toBe('1, 2, 3, 4, 5, 6');

        const contentFileTwo = fs.readFileSync(getPath('/two.txt'), 'utf-8');
        expect(contentFileTwo).toBe('31, 42, 22, 10, 5');

        const contentFileThree = fs.readFileSync(getPath('/three.txt'), 'utf-8');
        expect(contentFileThree).toBe('18, 33, 21, 1');

        const resultContent = fs.readFileSync(getPath('/result.txt'), 'utf-8');
        expect(resultContent).toBe('131');
    });

    it('07.c.2.2 works with files "two.txt" and "three.txt"', () => {
        writeSumSync(getPath('/two.txt'), getPath('/three.txt'), getPath('/result.txt'));
        const resultContent = fs.readFileSync(getPath('/result.txt'), 'utf-8');
        expect(resultContent).toBe('183');
    });

    it('07.c.2.3 works with files "one.txt" and "three.txt"', () => {
        writeSumSync(getPath('/one.txt'), getPath('/three.txt'), getPath('/result.txt'));
        const resultContent = fs.readFileSync(getPath('/result.txt'), 'utf-8');
        expect(resultContent).toBe('94');
    });
});
