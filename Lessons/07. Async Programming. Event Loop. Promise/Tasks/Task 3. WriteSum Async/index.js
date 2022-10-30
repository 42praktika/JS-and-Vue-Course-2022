import {promises as fs} from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const writeSum = (pathToFileOne, pathToFileTwo) => {
    let totalSum = 0;
    return fs.readFile(pathToFileOne, 'utf-8')
        .then((data) => {
            data.split(', ').forEach(num => {
                totalSum += Number(num)
            });
        })
        .catch((error) => console.error('Такого файла нет'))
        .then(() => fs.readFile(pathToFileTwo, 'utf-8'))
        .then((data) => {
            data.split(', ').forEach(num => {
                totalSum += Number(num)
            });
        })
        .catch((error) => console.error('Такого файла нет'))
        .then(() => totalSum);
}

export default writeSum;