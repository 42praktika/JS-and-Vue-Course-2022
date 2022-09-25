const getIntersectionUnion = (arrOne, arrTwo) => {
    // Начало
    let intersection = () => {
        let result = []
        for (let i=0; i<arrOne.length; i++) {
            if (arrTwo.includes(arrOne[i]) && !result.includes(arrOne[i])) {
                result.push(arrOne[i])
            }
        }
        return result
    };
    let union = () => {
        let result = []
        for (let i=0; i<arrOne.length; i++) {
            if (!result.includes(arrOne[i])) {
                result.push(arrOne[i])
            }
        }
        for (let i=0; i<arrTwo.length; i++) {
            if (!result.includes(arrTwo[i])) {
                result.push(arrTwo[i])
            }
        }
        return result
    };
    return {
        intersection: intersection(),
        union: union()
    }
    // Конец
};

export default getIntersectionUnion;