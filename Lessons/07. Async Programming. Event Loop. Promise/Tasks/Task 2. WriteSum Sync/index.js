import {readFileSync, writeFileSync} from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');;


const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    const firstFile = readFileSync(pathToFileOne)
    const secondFile = readFileSync(pathToFileTwo)

    const firstFileSum = sumFile(firstFile)
    const secondFileSum = sumFile(secondFile)

    const result = (firstFileSum + secondFileSum).toString()

    writeFileSync(pathToResultFile, result)
};
const sumFile = (file) => {
    const fileText =  file.toString().split(", ")
    return fileText.reduce((firstFileValue, secondFileValue) => parseInt(firstFileValue) + parseInt(secondFileValue))
}
export default writeSumSync;