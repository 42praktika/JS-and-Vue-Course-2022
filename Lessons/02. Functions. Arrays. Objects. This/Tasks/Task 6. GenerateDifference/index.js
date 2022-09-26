// Возвращает копию элемента
import * as Console from "console";

const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [ ...new Set(array) ];

const generateDifference = (objOne, objTwo) => {
    // Начало
    var answer = {...objOne, ...objTwo}
    const keys = Object.keys(answer);



    // Конец
};

export default generateDifference;