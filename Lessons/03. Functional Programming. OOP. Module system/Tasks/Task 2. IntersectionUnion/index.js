const getIntersectionUnion = (arrOne, arrTwo) => {
    // Начало
    var arrInt = [];
    var arrUnion = [];
    for (let i = 0; i < arrOne.length;i++) {
        if(arrTwo.includes(arrOne[i])){
            arrInt.push(arrOne[i]);
            arrUnion.push (arrOne[i]);
        } else if (!arrUnion.includes(arrOne[i])) {
            arrUnion.push(arrOne[i]);
        }
    }
    for (let i = 0; i < arrTwo.length; i++) {
        if (!(arrUnion.includes(arrTwo[i]))) {
            arrUnion.push(arrTwo[i])
        }
    }
    let answer = {
        intersection:arrInt,
        union: arrUnion
    };
    return answer;
    // Конец
};

export default getIntersectionUnion;