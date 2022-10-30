import { promises as fs } from 'fs';
import path from 'path';


// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования метода
// const currentPath = getPath('/one.txt');


const reverseContent = (filepath) => {
    // Начало
    const reverse = (file) => {
        const correctArray = file.toString().split('\n');
        let reversedArray = [];
        for (let i = 0; i < correctArray.length; i++) {
            reversedArray[i] = correctArray[correctArray.length - (i + 1)];
        }
        return reversedArray.join('\n');
    }

    const newPromise = new Promise((resolve, reject) => {
        fs.readFile(filepath)
            .then(dataOne => {
                resolve(fs.writeFile(filepath, reverse(dataOne)));
            })
            .catch(() => {
                reject(new Error('Что-то пошло не так)'))
            })
    })

    return newPromise;
    // Конец
};

export default reverseContent;