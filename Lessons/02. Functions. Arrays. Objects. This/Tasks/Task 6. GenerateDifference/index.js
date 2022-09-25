// Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [ ...new Set(array) ];

const generateDifference = (objOne, objTwo) => {
    // Начало
    var res = new Map();
    for(const[key, value] of Object.Entries(objOne)){
        if(objOne[key, value] in objTwo){
            if(objOne[key, value] !== objTwo[key, value]){
                res.set(objOne[key, value], "changed");
            }
            else{
                res.set(objOne[key, value], "unchanged");
            }
        }
        else{
            res.set(objOne[key, value], "deleted");
        }
    }

    for(const[key, value] of Object.Entries[objTwo]){
        if(not(objTwo[key, value]in objOne)){
            res.set(objTwo[key, value], "added");
        }
    }

    return Object.fromEntries(res); //forms an object, entries just check all entries in object
    // Конец
};

export default generateDifference;