import fs from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    // Начало
    let result = 0;
    
    result += fs.readFileSync(pathToFileOne, 'utf-8').split(', ').reduce((sum, curr) => { return Number(sum) + Number(curr); });
    result += fs.readFileSync(pathToFileTwo, 'utf-8').split(', ').reduce((sum, curr) => { return Number(sum) + Number(curr); });
    fs.writeFileSync(pathToResultFile, String(result));
    // Конец
};

export default writeSumSync;