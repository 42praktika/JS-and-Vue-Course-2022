// Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [ ...new Set(array) ];

const generateDifference = (objOne, objTwo) => {
    const first = JSON.parse() getCopy(onlyUnique(objOne));
    const second = getCopy(onlyUnique(objTwo));

};

export default generateDifference;