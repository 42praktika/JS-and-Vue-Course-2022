import { promises as fs } from 'fs';

const reverseContent = (filepath) => {
    // Начало
    return fs.readFile(filepath, 'utf-8')
        .then((data) => {
            const content = data.split('\n').reverse().join('\n');
            return fs.writeFile(filepath, content);
        });
    // Конец
};

export default reverseContent;