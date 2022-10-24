import fs from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');;



const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    let sumNumber = 0
    pathToFileOne = fs.readFile('./__fixtures__/one.txt', 'utf-8', (errorOne, dataOne))
    pathToFileTwo = fs.readFile('./__fixtures__/two.txt', 'utf-8', (errorTwo, dataTwo))
    pathToResultFile = fs.readFile('./__fixtures__/result.txt', 'utf-8', (errorThree , dataThree))
    for (let i = 0; i < pathToFileOne.length; i++) {
        for (let j = 0; j < pathToFileTwo.length; i++) {
            sumNumber += pathToFileOne[i] + pathToFileTwo[j]
        }
    }
    console.log(sumNumber)
};




export default writeSumSync;