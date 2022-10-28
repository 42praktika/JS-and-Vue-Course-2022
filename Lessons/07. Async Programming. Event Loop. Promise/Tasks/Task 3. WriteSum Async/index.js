import { promises as fs } from 'fs';
import path, {resolve} from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const writeSum = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    // Начало
    let number=0;
    let firstArr=[];
    let secondArr=[];
    return new Promise(function (resolve, reject){
        fs.readFile(pathToFileOne).then((dataOne) => {
            firstArr = dataOne.split(", ");
            for (let i = 0; i < firstArr.length; i++) {
                number += Number(firstArr[i]);
            }
        }).catch(() => {
            reject(new Error('Такого файла нет'))
        })
            .then(() => fs.readFile(pathToFileTwo)).then((dataTwo) => {
            secondArr = dataTwo.split(", ");
            for (let i = 0; i < secondArr.length; i++) {
                number += Number(secondArr[i]);
            }
        }).catch(() => {
            reject(new Error('Такого файла нет'))
        }).then(() => {
            resolve(number)
        })
    })
    // Конец
};

export default writeSum;