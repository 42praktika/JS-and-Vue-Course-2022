import {promises as fs} from 'fs';
import path from 'path';


// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования метода
// const currentPath = getPath('/one.txt');


const reverseContent = (filepath) => {
    return fs.readFile(filepath, 'utf-8')
        .then((text) => {
            return (fs.writeFile(filepath, text.split('\n').reverse().join('\n')))
        })
        .catch((error) => {
            console.error(error)
        });
};

export default reverseContent;