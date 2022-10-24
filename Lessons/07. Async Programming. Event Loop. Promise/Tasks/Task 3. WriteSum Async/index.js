import {promises as fs} from 'fs';
import path from 'path';


// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const writeSum = (pathToFileOne, pathToFileTwo) => {
    // Начало
    const sum = (fileContent) => {
        return fileContent.toString().split(',').reduce((curr, currValue) => {
            return Number(curr) + Number(currValue);
        });
    }

    let result = 0;

    return new Promise((resolve, reject) => {
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

    // Конец
};

export default writeSum;