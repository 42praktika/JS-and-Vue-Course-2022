import { promises as fs } from 'fs';
import path from 'path';


// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования метода
// const currentPath = getPath('/one.txt');


const reverseFile = (file) => {
    const pathToFile = "Lessons/07. Async Programming. Event Loop. Promise/Homework/Task 1. ReverseContent/__fixtures__/one.txt"
    const fileText = file.toString().split('\n');
    [fileText[0], fileText[2]] =  [fileText[2], fileText[0]]

    return fs.writeFile(pathToFile, fileText.join('\n'));
}


const reverseContent = (filepath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath)
            .then((data) => {
                resolve(reverseFile(data));
            })
            .catch(() => {
                reject(new Error('Error'))
            })
    })
};

export default reverseContent;