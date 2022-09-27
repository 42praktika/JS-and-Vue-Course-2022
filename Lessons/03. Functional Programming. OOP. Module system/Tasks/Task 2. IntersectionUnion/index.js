const getIntersectionUnion = (arrOne, arrTwo) => {
    // Начало
    let obj = {
        intersection: [],
        union: [],
    }
    let arrOneSet = new Set;
    let arrTwoSet = new Set;
    for (let i = 0; i < arrOne.length; i++) {
        for (let j = 0; j < arrTwo.length; j++) {
            if (arrOne[i] === arrTwo[j]) {
                arrOneSet.add(arrOne[i]);
            } else {
                arrTwoSet.add(arrOne[i]);
                arrTwoSet.add(arrTwo[j]);
            }
        }
    }
    let arrayOneFromSet = Array.from(arrOneSet);
    let arrayTwoFromSet = Array.from(arrTwoSet);
    obj.intersection = arrayOneFromSet;
    obj.union = arrayTwoFromSet;
    return obj;
    // Конец
};

export default getIntersectionUnion;