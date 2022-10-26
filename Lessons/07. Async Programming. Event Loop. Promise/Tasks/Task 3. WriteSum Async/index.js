import {promises, promises as fs} from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const writeSum = (pathToFileOne, pathToFileTwo) => {
    // Начало
    let sumOfNumbersInFiles = 0;
        return new Promise((resolveCallback, rejectCallback) => {
            fs.readFile(pathToFileOne, "utf-8").then((dataOne) => {
                    sumOfNumbersInFiles += getSumNumbersInFile(dataOne)
                })
            .then(() => fs.readFile(pathToFileTwo, "utf-8"))
                    .then((dateTwo) => {
                        sumOfNumbersInFiles += getSumNumbersInFile(dateTwo);
                        resolveCallback(sumOfNumbersInFiles);
                    })
                    .catch(() => {
                        rejectCallback(new Error('Такого файла нет'));
                    })
            })
    // Конец
};
const getSumNumbersInFile = (fileContent) => {
    const arrOfFileContent = fileContent.toString().split(', ');
    return arrOfFileContent
        .reduce((currentValue, prevValue) => parseInt(currentValue) + parseInt(prevValue));
}

export default writeSum;