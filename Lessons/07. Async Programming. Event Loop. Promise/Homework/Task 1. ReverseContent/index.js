import {promises as fs, readFileSync, writeFile} from 'fs';
import path from 'path';


// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования метода
// const currentPath = getPath('/one.txt');

const reverse = (string) => string.toString().split('\n').reverse().join('\n');

const reverseContent = (filepath) => {
    // Начало
    return fs
        .readFile(filepath)
        .then((data) => reverse(data))
        .then((string) => fs.writeFile(filepath, string))
    // Конец
};

export default reverseContent;