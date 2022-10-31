import {promises, promises as fs} from 'fs';
import path from 'path';


const writeSum = (pathToFileOne, pathToFileTwo) => {
    let summa = 0;
    return new Promise((resolve, reject) => {
        fs.readFile(pathToFileOne, "utf-8").then((dataOne) => {
            summa += sumFile(dataOne)
        })
            .then(() => fs.readFile(pathToFileTwo, "utf-8"))
            .then((dateTwo) => {
                summa += sumFile(dateTwo);
                resolve(summa);
            })
            .catch(() => {
                reject(new Error('Такого файла нет'));
            })
    })
}

const sumFile = (file) => {
    return file.toString()
        .split(", ")
        .reduce((previousValue, currentValue) => previousValue + parseInt(currentValue), 0);
}
export default writeSum;
