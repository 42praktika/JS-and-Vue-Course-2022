import { promises as fs } from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const writeSum = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    // Начало
    let result = 0;

    const summarize = (file) => {
        return file.toString().split(', ').reduce((sum, curr) => { return Number(sum) + Number(curr);});
    }

    return new Promise((resolve, reject) => {
        fs.readFile(pathToFileOne)
            .then(fileOne => {
                result += summarize(fileOne);
            })
            .then(() => fs.readFile(pathToFileTwo))
            .then(fileTwo => {
                result += summarize(fileTwo);
                resolve(result);
            })
            .catch(() => {
                reject(new Error('Такого файла нет'));
            })
            .then(() => { resolve(result); })
    })
    // Конец
};

export default writeSum;