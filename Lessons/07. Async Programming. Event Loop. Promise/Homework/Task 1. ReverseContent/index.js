import { promises as fs } from 'fs';
import path from 'path';
import {throwError} from "@vue/vue2-jest/lib/utils";


// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования метода
// const currentPath = getPath('/one.txt');


const reverseContent = (filepath) => {
    // Начало
    const reverseLine = (fileContent) => {
        return fileContent.toString().split('\n').reverse().join('\n')
    }

    return new Promise((resolve,reject) => {
        fs.readFile(filepath)
            .then(data => {
                resolve(fs.writeFile(filepath, reverseLine(data)))
            })
            .catch(() => {
                reject(new Error('Такого файла нет'));
            })
    });
    // Конец
};

export default reverseContent;