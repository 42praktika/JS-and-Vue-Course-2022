const getIntersectionUnion = (arrOne, arrTwo) => {
    // Начало
    const numbers = [ ...arrOne, ...arrTwo ];
    const unionNumbers = numbers
        .filter((num) => arrOne.includes(num) || arrTwo.includes(num))
        .reduce((acc, num) => acc.includes(num) ? acc : [ ...acc, num ], []);

    const intersectionNumbers = arrOne.filter((num) => arrTwo.includes(num));

    return {
        intersection: intersectionNumbers,
        union: unionNumbers,
    };
    // Конец
};

export default getIntersectionUnion;