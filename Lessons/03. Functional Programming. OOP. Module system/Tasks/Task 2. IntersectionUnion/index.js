const getIntersectionUnion = (arrOne, arrTwo) => {
    // Начало
    let inters_arr = arrOne.filter(a => arrTwo.includes(a));
    inters_arr.filter(a => inters_arr.includes(a));
    let union_arr = arrOne.filter(a => arrOne.includes(a)).concat(arrTwo.filter(b => arrTwo.includes(b)));
    union_arr = union_arr.filter(function(el, i, self) {
        return i === self.indexOf(el);
    })
    let dict = {
        'intersection': inters_arr,
        'union': union_arr
    }
    return dict

    // Конец
};

export default getIntersectionUnion;