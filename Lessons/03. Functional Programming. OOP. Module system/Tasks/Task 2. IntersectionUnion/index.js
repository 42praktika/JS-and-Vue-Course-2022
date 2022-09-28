const getIntersectionUnion = (arrOne, arrTwo) => {
    let intersection = () => {
        let arrThree = []
        for (let i = 0; i < arrOne.length; i++) {
            if (arrTwo.includes(arrOne[i])) {
                arrThree.push(arrOne[i])
            }
        }
        return arrThree
    }
    let union = () => {
        let arrThree = []
        for (let i = 0; i < arrOne.length; i++) {
            if (!arrThree.includes(arrOne[i])) {
                arrThree.push(arrOne[i])
            }
        }
        for (let i = 0; i < arrTwo.length; i++) {
            if (!arrThree.includes(arrTwo[i])) {
                arrThree.push(arrTwo[i])
            }
        }
        return arrThree
    }
    return {
        intersection : intersection(),
        union : union()
    }
};
export default getIntersectionUnion;