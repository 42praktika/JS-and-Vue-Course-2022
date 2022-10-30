import { promises as fs } from 'fs';
import path, { resolve } from 'path';


// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования метода
// const currentPath = getPath('/one.txt');


const reverseContent = (filepath) => {
    // Начало
    return new Promise((resolve, reject) => {
        fs.readFile(filepath)
        .then((textfile) => {
            resolve(fs.writeFile(filepath, textfile.toString().split('\n').reverse().join('\n')));
        })
        .catch(() => {
            reject(new Error('Не удалось считать файл'));
        })
    })
    // Конец
};

export default reverseContent;