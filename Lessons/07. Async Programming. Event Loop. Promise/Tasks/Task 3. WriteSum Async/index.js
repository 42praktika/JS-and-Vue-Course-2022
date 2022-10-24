import { promises as fs } from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const writeSum = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    const myPromise = new Promise((resolveCallback, rejectCallback) => {
        // Аргументами функции являются функции resolveCallback и rejectCallback

    })
};

export default writeSum;