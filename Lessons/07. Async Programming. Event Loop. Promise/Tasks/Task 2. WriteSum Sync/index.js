import fs, {readFileSync} from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    let sum = 0;
    let file1 = readFileSync(pathToFileOne, 'utf-8').split(', ');
    let file2 = readFileSync(pathToFileTwo, 'utf-8').split(', ');
    file1 = file1.concat(file2);
    for (let i = 0; i < file1.length; i++) {
        sum+=Number(file1[i]);
    }
    fs.writeFileSync(pathToResultFile, sum.toString());
};

export default writeSumSync;