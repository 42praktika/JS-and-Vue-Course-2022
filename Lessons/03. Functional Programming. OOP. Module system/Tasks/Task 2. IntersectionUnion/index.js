const getIntersectionUnion = (arrOne, arrTwo) => {
    // Начало
    const intersection = [];
    const union = [];

    const uniqueArrOne = [...new Set(arrOne)];
    const uniqueArrTwo = [...new Set(arrTwo)];

    let concat = uniqueArrOne.concat(uniqueArrTwo).sort((a, b) => a - b);

    for (let i = 0; i < concat.length - 2; i++) {
        if (concat[i] === concat[i + 1]) {
            intersection.push(concat[i]);
        } else {
            if (concat[i + 1] === concat[i + 2]) {
                intersection.push(concat[i + 2]);
            } else union.push(concat[i + 1]);
        }
    }

    const uniqueIntersection = [...new Set(intersection)];
    const uniqueUnion = [...new Set(concat)]; // изначально в Set(concat), вместо concat был union, но оказалось, что
                                              // нам не надо в union помещать только те значения, что есть лишь в одном
                                              // из массивов, так что я просто записал сюда слияние обоих массивов, что
                                              // в итоге и есть правильный ответ (по крайней мере по тестам)

    let answer = {
        intersection: uniqueIntersection,
        union: uniqueUnion,
    }

    return answer;
    // Конец
};

export default getIntersectionUnion;