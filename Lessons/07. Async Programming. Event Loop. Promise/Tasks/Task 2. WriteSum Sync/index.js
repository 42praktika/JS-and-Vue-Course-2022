import fs from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    // Начало
    const firstFileContent = fs.readFileSync(pathToFileOne);
    const secondFileContent = fs.readFileSync(pathToFileTwo);

    const sum = (fileContent) => {
        return  fileContent.toString().split(',').reduce((curr, currValue) => {
            return Number(curr) + Number(currValue);
        });
    };

    fs.writeFileSync(pathToResultFile, (sum(firstFileContent) + sum(secondFileContent)).toString());

    // Конец
};

export default writeSumSync;