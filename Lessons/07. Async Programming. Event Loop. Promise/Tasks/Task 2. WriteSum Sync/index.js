import fs from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    let totalSum = 0;

    fs.readFileSync(pathToFileOne, 'utf-8').split(', ').forEach(num => {totalSum += Number(num)});
    fs.readFileSync(pathToFileTwo, 'utf-8').split(', ').forEach(num => {totalSum += Number(num)});

    fs.writeFileSync(pathToResultFile, String(totalSum));
};

export default writeSumSync;