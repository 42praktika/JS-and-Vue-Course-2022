import fs from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    // Начало
    fs.readFile('./__fixtures__/one', 'utf-8', (errorOne, dataOne) => {
        fs.readFile('./__fixtures__/two', 'utf-8', (errorTwo, dataTwo) => {
            fs.readFile('./__fixtures__/three', 'utf-8', (errorThree, dataThree) => {
                alert(`${dataOne}${dataTwo}${dataThree}`);
            })
        })
    })
    // Конец
};

export default writeSumSync;