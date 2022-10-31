import fs from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    // Начало
    let FileOne = fs.readFileSync(pathToFileOne);
    let FileTwo = fs.readFileSync(pathToFileTwo);
    const sum = (fileContent) => {
        const fileText =  fileContent.toString().split(',');
        return fileText.reduce((currentValue, prevValue) => parseInt(currentValue) + parseInt(prevValue));
    };
    let result = sum(FileOne) + sum(FileTwo);
    fs.writeFileSync(pathToResultFile, result.toString());


    // Конец
};

export default writeSumSync;