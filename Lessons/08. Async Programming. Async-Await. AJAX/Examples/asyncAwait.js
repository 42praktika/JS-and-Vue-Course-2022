import { promises } from 'fs';

const getContent = async () => {
    const promiseOne = new Promise((resolve, reject) => {
        setTimeout(() => resolve('первый текст'), 1000);
    });

    const firstFileData = await promiseOne;

    const promiseTwo = new Promise((resolve, reject) => { // (*)
        setTimeout(() => resolve('второй текст'), 1000);
    });
    const secondFileData = await promiseTwo;

    return `${firstFileData} ${secondFileData}`;
};

getContent().then((content) => {
    console.log(content);
});




const getContent = async () => {
    // await работает только внутри async–функций
    const firstFileData = await promises.readFile('./files/one', 'utf-8');
    const secondFileData = await promises.readFile('./files/two', 'utf-8');

    return `${firstFileData}${secondFileData}`;
};



const template = async () => {
    return 'text';
    // return Promise.resolve('text');
};

template().then(console.log);   // text