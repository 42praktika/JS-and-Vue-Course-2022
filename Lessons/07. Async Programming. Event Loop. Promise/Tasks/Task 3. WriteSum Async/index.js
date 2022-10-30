import { promises as fs } from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const writeSum = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    // Начало
    const sum = (num) => {
        return num.toString().split(',').reduce((previousValue, currentValue) => {
            return Number(previousValue) + Number(currentValue);
        })
    }

    let result = 0;

    const newPromise = new Promise((resolve, reject) => {
        fs.readFile(pathToFileOne)
            .then(dataOne => {
                result += sum(dataOne);
            })
            .then(() => fs.readFile(pathToFileTwo))
            .then(dataTwo => {
                result += sum(dataTwo);
                resolve(result);
            })
            .catch(() => {
                reject(new Error('Такого файла нет'));
            })
    })

    return newPromise;
    // Конец
};

export default writeSum;