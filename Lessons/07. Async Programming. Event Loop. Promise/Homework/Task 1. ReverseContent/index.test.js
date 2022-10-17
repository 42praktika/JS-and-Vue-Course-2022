import { promises as fs, readFileSync } from 'fs';
import reverseContent from './index';
import path from 'path';

const reverseLines = (content) => content.split('\n').reverse().join('\n');
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);

describe('07.h.1 reverseContent', () => {
    it('07.h.1.1 works correct', () => {
        const content = 'just\ndo\nit';
        const filePath = getPath('/one.txt');
        const promise = fs
            .writeFile(filePath, content)
            .then(() => reverseContent(filePath))
            .then(() => readFileSync(filePath, 'utf-8'));
        return expect(promise).resolves.toBe(reverseLines(content));
    });
});