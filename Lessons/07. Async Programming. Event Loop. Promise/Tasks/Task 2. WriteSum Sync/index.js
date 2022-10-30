import fs from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    // Начало
    const firstFile = fs.readFileSync(pathToFileOne);
    const secondFile = fs.readFileSync(pathToFileTwo);

    const sum = (num) => {
        return num.toString().split(',').reduce((previousValue, currentValue) => {
            return Number(previousValue) + Number(currentValue);
        })
    }

    fs.writeFileSync(pathToResultFile, (sum(firstFile) + sum(secondFile)).toString())
    // Конец
};

export default writeSumSync;