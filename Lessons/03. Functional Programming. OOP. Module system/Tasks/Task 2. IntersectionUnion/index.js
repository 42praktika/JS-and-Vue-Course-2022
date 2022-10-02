const getIntersectionUnion = (arrOne, arrTwo) => {
    return {intersection : arrOne.filter(x => arrTwo.includes(x)), union : [...new Set([...arrOne, ...arrTwo])]};
};

export default getIntersectionUnion;