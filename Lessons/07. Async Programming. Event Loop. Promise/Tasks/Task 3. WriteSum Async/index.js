import { promises as fs } from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');


const sumFile = (file) => {
    const fileText =  file.toString().split(", ")
    return fileText.reduce((firstFileValue, secondFileValue) => parseInt(firstFileValue) + parseInt(secondFileValue))
}

const writeSum = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    let sumNumber = 0
    return new Promise((resolve, reject) => {
        fs.readFile(pathToFileOne).then((dataOne) => {
            sumNumber += sumFile(dataOne)
        })
            .then(() => fs.readFile(pathToFileTwo))
            .then((dateTwo) => {
                sumNumber += sumFile(dateTwo)
                resolve(sumNumber);
            })
            .catch(() => {
                reject(new Error("Такого файла нет"))
            })
    })
};

export default writeSum;