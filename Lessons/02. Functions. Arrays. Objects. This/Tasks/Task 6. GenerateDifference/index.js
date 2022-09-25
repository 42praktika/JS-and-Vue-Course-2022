// Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [ ...new Set(array) ];

const generateDifference = (objOne, objTwo) => {

    let keys = onlyUnique([...Object.keys(objOne), ...Object.keys(objTwo)]);
    let result = {};

    for (let i = 0; i < keys.length; i++) {
        if (keys[i] in objOne && !(keys[i] in objTwo)) {
            result[keys[i]] = "deleted";
        }
        if (keys[i] in objTwo && !(keys[i] in objOne)) {
            result[keys[i]] = "added";
        }
        if (keys[i] in objTwo && keys[i] in objOne && objOne[keys[i]] === objTwo[keys[i]]) {
            result[keys[i]] = "unchanged";
        }
        if (keys[i] in objTwo && keys[i] in objOne && objOne[keys[i]] !== objTwo[keys[i]]) {
            result[keys[i]] = "changed";
        }
    }
    return result;
};

export default generateDifference;