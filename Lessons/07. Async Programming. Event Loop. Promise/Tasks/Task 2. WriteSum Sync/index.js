import fs from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    // Начало
    const fileContentOne = fs.readFileSync(pathToFileOne, "utf-8");
    const fileContentTwo = fs.readFileSync(pathToFileTwo, "utf-8");
    const getSumInFileOne = sumFileContent(fileContentOne);
    const getSumInFileTwo = sumFileContent(fileContentTwo);
    const result = getSumInFileOne + getSumInFileTwo;
    fs.writeFileSync(pathToResultFile, result.toString());
    // Конец
};
const sumFileContent = (fileContent) => {
    const fileText =  fileContent.toString().split(', ');
    return fileText.reduce((currentValue, prevValue) => parseInt(currentValue) + parseInt(prevValue));
}


export default writeSumSync;