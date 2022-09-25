// Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [ ...new Set(array) ];

const generateDifference = (objOne, objTwo) => {
    // Начало
    var res= {}
    var keysOne = Object.keys(objOne)
    var keysTwo = Object.keys(objTwo)
    var valuesOne=Object.values(objOne)
    var valuesTwo=Object.values(objTwo)
    let maxLen = 0
    if(keysOne.lenght>keysTwo.length){
        maxLen=keysOne.length
    } else {
        maxLen=keysTwo.length
    }
    for (let i = 0; i<maxLen;i++){
        if (keysOne[i]===keysTwo[i]){
            res[keysOne[i]] = 'changed'
            if(valuesOne[i]===valuesTwo[i]){
                res[keysOne[i]] ='unchanged'
            }
        } else {
            if (!(keysOne[i] in keysTwo)) {
                res[keysOne[i]] = 'deleted'
            } if (!(keysTwo[i] in keysOne)) {
                res[keysTwo[i]] = 'added'
            }
        }}





    return res
    // Конец
};

export default generateDifference;