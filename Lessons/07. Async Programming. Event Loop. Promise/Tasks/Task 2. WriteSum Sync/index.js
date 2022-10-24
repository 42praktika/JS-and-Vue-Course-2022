import {readFileSync, writeFileSync} from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const parseSumFromFile = (pathToFile) => {
    const text = readFileSync(pathToFile).toString();
    const arrFromText = text.split(', ');
    return arrFromText.reduce((a, b) => a + parseInt(b), 0)
}

const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    // Начало
    const firstSum = parseSumFromFile(pathToFileOne);
    const secondSum = parseSumFromFile(pathToFileTwo);
    const result = firstSum + secondSum;
    writeFileSync(pathToResultFile, result.toString());
    // Конец
};

export default writeSumSync;