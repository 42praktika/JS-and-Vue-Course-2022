import { promises as fs } from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const getSum = (content) => content
    .split(', ')
    .reduce((acc, str) => acc + Number(str), 0);

const writeSum = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    // Начало
    const fileOnePromise = fs.readFile(pathToFileOne, 'utf-8');
    const fileTwoPromise = fs.readFile(pathToFileTwo, 'utf-8');
    return Promise
        .all([ fileOnePromise, fileTwoPromise ])
        .then(([ contentOne, contentTwo ]) => getSum(contentOne) + getSum(contentTwo))
        .catch((error) => {
            throw new Error('Такого файла нет');
        });
    // Конец
};

export default writeSum;