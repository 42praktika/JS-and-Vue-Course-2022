import { promises as fs } from 'fs';
import path from 'path';


// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования метода
// const currentPath = getPath('/one.txt');


const reverseContent = (filepath) => {
    return fs.readFile(filepath, 'utf-8')
        .then(txt => {
            return fs.writeFile(filepath, txt.split('\n')
                .reverse()
                .join('\n'))
        });
};

export default reverseContent;