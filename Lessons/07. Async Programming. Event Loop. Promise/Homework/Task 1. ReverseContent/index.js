import { promises as fs } from 'fs';
import path from 'path';
import {throwError} from "@vue/vue2-jest/lib/utils";


// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования метода
// const currentPath = getPath('/one.txt');


const reverseContent = (filepath) => {
    return new Promise(function(resolve, reject) {
        fs.readFile(filepath, 'utf-8')
            .then((text) => {
                resolve(fs.writeFile(filepath, text.split('\n').reverse().join('\n'))
                    .then(() => {
                    })
                    .catch((error) => {
                        throwError(error)
                    }));
            })
            .catch((error) => {
                throwError(error)
            });
    });
};

export default reverseContent;