const getIntersectionUnion = (arrOne, arrTwo) => {
    let answer = {
        intersection: arrOne.filter(x => arrTwo.includes(x)),
        union: [...new Set([...arrOne, ...arrTwo])]
    }
    return answer;

};

export default getIntersectionUnion;