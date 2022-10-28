import fs, {readFileSync} from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    // Начало
const firstFile = fs.readFileSync(pathToFileOne).toString();
const secondFile = fs.readFileSync(pathToFileTwo).toString();


let firstArr = firstFile.split(",");
let secondArr = secondFile.split(",");


let firstSum = 0;
let secondSum = 0;

    for (let i = 0; i < firstArr.length; i++) {
        firstSum+=Number(firstArr[i]);
    }

    for (let j = 0; j < secondArr.length; j++) {
        secondSum+=Number(secondArr[j]);
    }

    let result = Number(firstSum)+Number(secondSum);

    fs.writeFileSync(pathToResultFile, result.toString());



    // Конец
};

export default writeSumSync;