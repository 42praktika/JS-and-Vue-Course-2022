const getIntersectionUnion = (arrOne, arrTwo) => {
    // Начало
    let arr1 = [...new Set(arrOne)];
    let arr2 = [...new Set(arrTwo)];
    var intersArr = arr1.filter(x => arr2.includes(x));
    var unionArr = [...new Set(arr1, arr2)];
    let res = {
        intersection: intersArr,
        union: unionArr
    };
    return res;
    // Конец
};

export default getIntersectionUnion;