import { promises as fs } from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const writeSum = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    // Начало
    const promiseOne = fs.readFile(pathToFileOne);

    const promiseTwo = fs.readFile(pathToFileTwo);

    const stringToNumsArray = (str) => {
        return str.split(', ').map((num) => Number(num));
    }

    const calcSumArr = (arr) => {
        return arr.reduce((a, b) => a + b, 0);
    }

    return Promise
        .all([promiseOne, promiseTwo])
        .then(([dataOne, dataTwo]) =>
            calcSumArr(stringToNumsArray(dataOne.toString())) + calcSumArr(stringToNumsArray(dataTwo.toString())))
        .catch(() => {
            throw new Error('Такого файла нет');
        });
    // Конец
};

export default writeSum;
