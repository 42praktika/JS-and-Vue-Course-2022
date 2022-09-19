// Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [ ...new Set(array) ];

const generateDifference = (objOne, objTwo) => {
    let ansObj = {...objOne, ...objTwo};
    for (let key in ansObj) {
        if (objOne.hasOwnProperty(key))
        {
            if (objTwo.hasOwnProperty(key))
            {
                if (objOne[key] === ansObj[key]) ansObj[key] = "unchanged";
                else ansObj[key] = "changed";
            }
            else ansObj[key] = 'deleted';
        }
        else ansObj[key] = "added";
    }
    return ansObj;
};

export default generateDifference;
