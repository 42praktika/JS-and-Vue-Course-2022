import {promises as fs, readFile, readFileSync, writeFile} from 'fs';
import path from 'path';
import {promise} from "sinon";

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const getSum = (numbers) => {
    const text = numbers.toString();
    const arrFromText = text.split(', ');
    return arrFromText.reduce((a, b) => a + parseInt(b), 0)
}

const writeSum = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    // Начало
    const firstPromise = fs
        .readFile(pathToFileOne)
        .then((numbers) => getSum(numbers))

    const secondPromise = fs
        .readFile(pathToFileTwo)
        .then((numbers) => getSum(numbers))

    const result = Promise
        .all([firstPromise, secondPromise])
        .then(([firstData, secondData]) => firstData + secondData)
        .catch(() => {
            throw new Error('Такого файла нет')
        })

    return result
    // Конец
};

export default writeSum;