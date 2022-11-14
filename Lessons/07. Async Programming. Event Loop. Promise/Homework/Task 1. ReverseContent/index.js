import {promises as fs} from 'fs';
import path from 'path';


const reverseContent = (filepath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath).then(data => {
            resolve(fs.writeFile(filepath, data.toString().split('\n').reverse().join('\n')));
        })
            .catch(() => {
                reject(new Error('Такого файла нет'));
            })
    });
};

export default reverseContent;
