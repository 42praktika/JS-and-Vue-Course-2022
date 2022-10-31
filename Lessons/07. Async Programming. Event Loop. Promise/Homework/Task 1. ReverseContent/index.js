import { promises as fs } from 'fs';
import path from 'path';


// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования метода
// const currentPath = getPath('/one.txt');


const reverseContent = (filepath) => {
    // Начало
    const promise = new Promise((resolve, reject) => {
        fs.readFile(filepath)
            .then(dataOne => {
                resolve(fs.writeFile(filepath, dataOne.toString().split('\n').reverse().join('\n')));
            })
            .catch(() => {
                reject(new Error('Такого файла нет'))
            })
    })
    return promise;
    // Конец
};

export default reverseContent;