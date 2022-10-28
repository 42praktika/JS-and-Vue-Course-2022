import { promises as fs } from 'fs';
import path from 'path';


// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования метода
// const currentPath = getPath('/one.txt');


const reverseContent = (filepath) => {
    // Начало
    let str;
    return new Promise(function (resolve, reject) {
        fs.readFile(filepath).then((lines) => {
            str = lines.split("\n").reverse().join("\n");
            fs.writeFile(filepath, str).then(()=>{})
        })
    })
    // Конец
};

export default reverseContent;