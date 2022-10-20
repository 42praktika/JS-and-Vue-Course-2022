import { promises as fs } from 'fs';
import path from 'path';
import {throwError} from "@vue/vue2-jest/lib/utils";

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const writeSum = (pathToFileOne, pathToFileTwo) => {
    let totalSum = 0;

     return new Promise(function(resolve, reject) {
        fs.readFile(pathToFileOne, 'utf-8')
            .then((data) => {
                data.split(', ').forEach(num => {totalSum += Number(num)});
            })
            .catch(() => {reject(new Error('Такого файла нет'))})
            .then(() => {
                fs.readFile(pathToFileTwo, 'utf-8')
                    .then((data) => {
                        data.split(', ').forEach(num => {totalSum += Number(num)});
                    })
                    .catch(() => {reject(new Error('Такого файла нет'))})
                    .then(() => {resolve(totalSum)});
            });
    });
};

export default writeSum;