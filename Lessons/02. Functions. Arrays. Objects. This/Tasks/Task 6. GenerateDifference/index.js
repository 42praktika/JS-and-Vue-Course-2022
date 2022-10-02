// Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [ ...new Set(array) ];

const generateDifference = (objOne, objTwo) => {
    let resultDifference = {...objOne, ...objTwo};
    for (let key in resultDifference) {
        if (objOne.hasOwnProperty(key) && objTwo.hasOwnProperty(key))
        {
            if (objOne[key] === resultDifference[key]) resultDifference[key] = "unchanged";
            else resultDifference[key] = "changed";
        }
        else if (objOne.hasOwnProperty(key) && !objTwo.hasOwnProperty(key)) resultDifference[key] = 'deleted';
        else if (!objOne.hasOwnProperty(key)) resultDifference[key] = "added";
    }
    return resultDifference;
};

export default generateDifference;
