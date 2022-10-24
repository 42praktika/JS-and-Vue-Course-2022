import { promises as fs, readFile, writeFile } from 'fs';
import path from 'path';
import {promise} from "sinon";

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const writeSum = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    // Начало
    // Конец
};

export default writeSum;