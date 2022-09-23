const getIntersectionUnion = (arrOne, arrTwo) => {
    // Начало
    let intersection=arrOne.filter(num=> arrTwo.includes(num))
    let union=[... new Set([...arrOne,...arrTwo])]
    return {
        intersection,
        union
    };
    // Конец
};

export default getIntersectionUnion;