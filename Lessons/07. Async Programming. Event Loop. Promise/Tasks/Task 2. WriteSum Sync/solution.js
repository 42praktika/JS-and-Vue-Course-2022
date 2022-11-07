import fs from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const getSum = (content) => content
    .split(', ')
    .reduce((acc, str) => acc + Number(str), 0);

const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    // Начало
    const fileOneContent = fs.readFileSync(pathToFileOne, 'utf-8');
    const fileTwoContent = fs.readFileSync(pathToFileTwo, 'utf-8');

    const sum = String(getSum(fileOneContent) + getSum(fileTwoContent));

    fs.writeFileSync(pathToResultFile, sum);
    // Конец
};

export default writeSumSync;