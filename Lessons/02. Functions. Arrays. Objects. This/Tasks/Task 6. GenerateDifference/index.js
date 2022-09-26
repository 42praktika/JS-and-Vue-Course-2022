// Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [ ...new Set(array) ];

const generateDifference = (objOne, objTwo) => {
    // Начало
    let uniqKeys = onlyUnique([...Object.keys(objOne),...Object.keys(objTwo)]);
    let result = {};
    for (let i = 0; i < uniqKeys.length;i++){
        if ((uniqKeys[i] in objTwo) && (!(uniqKeys[i] in objOne))){
            result[uniqKeys[i]] = 'added';
        }
        else if ((uniqKeys[i] in objOne) && (!(uniqKeys[i] in objTwo))){
            result[uniqKeys[i]] = 'deleted';
        }
        else if ((uniqKeys[i] in objTwo) && (uniqKeys[i] in objOne) && (objOne[uniqKeys[i]] === objTwo[uniqKeys[i]])){
            result[uniqKeys[i]] = 'unchanged';
        }
        else if ((uniqKeys[i] in objTwo) && (uniqKeys[i] in objOne) && (objOne[uniqKeys[i]] !== objTwo[uniqKeys[i]])){
            result[uniqKeys[i]] = 'changed';
        }
    }
    return result;
    // Конец
};

export default generateDifference;