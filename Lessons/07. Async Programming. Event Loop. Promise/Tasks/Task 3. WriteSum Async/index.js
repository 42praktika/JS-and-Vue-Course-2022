import {promises as fs} from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const writeSum = (pathToFileOne, pathToFileTwo, pathToResultFile) => {

    const sum = (data) => {
        return data.toString().split(',').reduce((previousValue, currentValue) => {
            return Number(previousValue) + Number(currentValue);
        });
    }
    let result = 0;
    return new Promise((resolve, reject) => {
        fs.readFile(pathToFileOne)
            .then(data1 => {
                result += sum(data1)
            })
            .then(() => fs.readFile(pathToFileTwo))
            .then(data2 => {
                result += sum(data2);
                resolve(result);
            })
            .catch(() => {
                reject(new Error('Такого файла нет'))
            })
    });

};

export default writeSum;