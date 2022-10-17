const fs = require('fs');
const path = require('path');

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const getSum = (content) => content
    .split(', ')
    .map((str) => Number(str))
    .reduce((acc, num) => acc + num, 0);

const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    // Начало
    const contentOne = fs.readFileSync(pathToFileOne, 'utf-8');
    const contentTwo = fs.readFileSync(pathToFileTwo, 'utf-8');

    const sum = getSum(contentOne) + getSum(contentTwo);

    fs.writeFileSync(pathToResultFile, String(sum));
    // Конец
};

module.exports = writeSumSync;