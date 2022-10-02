const getIntersectionUnion = (arrOne, arrTwo) => {

    let obj = {
        intersection: [],
        union: []
    };

    for (let i = 0; i < arrOne.length; i++) {
        if (arrTwo.includes(arrOne[i])) {
            if (!obj.intersection.includes(arrOne[i])) {
                obj.intersection.push(arrOne[i]);
            }
        }
        if (!obj.union.includes(arrOne[i])) {
            obj.union.push(arrOne[i]);
        }
    }

    for (let i = 0; i < arrTwo.length; i++) {
        if (!obj.union.includes(arrTwo[i])) {
            obj.union.push(arrTwo[i]);
        }
    }

    return obj;
};

export default getIntersectionUnion;