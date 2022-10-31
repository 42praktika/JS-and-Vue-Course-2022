import { promises as fs } from 'fs';
import path from "path";

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const writeSum = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    let filesSum = 0;
    return fs.readFile(pathToFileOne, 'utf-8')
        .then(x => x.split(', ').forEach(x => filesSum += Number(x)))
        .catch((error) => console.error("Такого файла нет"))
        .then(x => fs.readFile(pathToFileTwo, 'utf-8')
            .then(x => x.split(', ').forEach(x => filesSum += Number(x)))
            .catch((error) => console.error("Такого файла нет")))
        .then(() => filesSum)
};

export default writeSum;