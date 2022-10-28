import { promises as fs } from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования метода
// const currentPath = getPath('/one.txt');

const reverseContent = (filepath) => {
    // Начало
    fs.readFile(filepath, 'utf-8')
        .then((data) => data.split('\n').reverse().join('\n'))
        .then((data) => fs.writeFile(filepath, data));
    // Конец
};

export default reverseContent;
