import fs from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    // Начало

    const numsFromFileOne = fs.readFileSync(pathToFileOne).toString().split(', ');
    const numsFromFileTwo = fs.readFileSync(pathToFileTwo).toString().split(', ');

    let sum = 0;
    for (let i = 0; i < numsFromFileOne.length; i++) {
        sum += Number(numsFromFileOne[i]);
    }
    for (let i = 0; i < numsFromFileTwo.length; i++) {
        sum += Number(numsFromFileTwo[i]);
    }

    fs.writeFileSync(pathToResultFile, sum.toString());
    // Конец
};

export default writeSumSync;
