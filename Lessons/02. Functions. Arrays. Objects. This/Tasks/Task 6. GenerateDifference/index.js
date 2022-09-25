// Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [ ...new Set(array) ];

const generateDifference = (objOne, objTwo) => {
    // Начало
    const result = {};
    for (let key in objOne) {
        if (objTwo[key] === undefined) {
            result[key] = 'deleted';
        } else if (objOne[key] !== objTwo[key]) {
            result[key] = 'changed';
        } else {
            result[key] = 'unchanged';
        }
    }
    for (let key in objTwo) {
        if (objOne[key] === undefined) {
            result[key] = 'added';
        }
    }
    return result
    // Конец
};

export default generateDifference;