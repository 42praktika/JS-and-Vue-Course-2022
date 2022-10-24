import fs, {readFileSync} from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    let sum = 0;
    let dataFile1 = readFileSync(pathToFileOne, 'utf-8').split(', ');
    const dataFile2 = readFileSync(pathToFileTwo, 'utf-8').split(', ');
    dataFile1 = dataFile1.concat(dataFile2);
    for (let i = 0; i < dataFile1.length; i++) {
        sum += Number(dataFile1[i]);
    }
    fs.writeFileSync(pathToResultFile, sum.toString());
};

export default writeSumSync;