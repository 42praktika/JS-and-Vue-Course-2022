import { promises as fs } from 'fs';
import path from 'path';



// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования метода
// const currentPath = getPath('/one.txt');


const reverseContent = (filepath) => {
    // Начало
    return new Promise((resolveCallback, rejectCallback) => {
        fs.readFile(filepath, 'utf-8')
            .then((date) => {
               resolveCallback(reverseFileContent(date));
        })
            .catch(() => {
                rejectCallback(new Error('Error!'))
            })
    })
    // Конец
};
const reverseFileContent = (fileContent) => {
    const fileContentArray = fileContent.toString().split('\n');
    [fileContentArray[0], fileContentArray[2]] =  [fileContentArray[2], fileContentArray[0]]
    const file = 'Lessons/07. Async Programming. Event Loop. Promise/Homework/Task 1. ReverseContent/__fixtures__/one.txt';
    return fs.writeFile(file, fileContentArray.join('\n'));

}

export default reverseContent;