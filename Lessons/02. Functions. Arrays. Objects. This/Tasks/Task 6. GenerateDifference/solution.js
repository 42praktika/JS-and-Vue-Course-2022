// Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [ ...new Set(array) ];

const generateDifference = (objOne, objTwo) => {
    // Начало
    const keys = [ ...Object.keys(objOne), ...Object.keys(objTwo) ];
    const uniqKeys = onlyUnique(keys);
    const customReduceFunc = (acc, key) => {
        const name = key;
        if (!objOne.hasOwnProperty(key)) {
            return { ...acc, [key]: 'added' };
        }
        if (!objTwo.hasOwnProperty(key)) {
            return { ...acc, [key]: 'deleted' };
        }
        if (getCopy(objOne[key]) === getCopy(objTwo[key])) {
            return { ...acc, [key]: 'unchanged' };
        }
        return { ...acc, [key]: 'changed' };

    };
    return uniqKeys.reduce(customReduceFunc, {});
    // Конец
};

export default generateDifference;