const getIntersectionUnion = (arrOne, arrTwo) => {
    let obj = {
        intersection: [],
        union: []
    };
    let arr1 = [[]], arr2 = [[]], flag = true;
    for (let i = 0; i < arrOne.length; i++) {
        for (let j = 0; j < arr2[arrOne[i] % 10].length; j++) {
            if (arrOne[i] === arr2[arrOne[i] % 10][j]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            arr2[arrOne[i] % 10].push(arrOne[i]);
            obj.union.push(arrOne[i]);
        }
    }

    for (let i = 0; i < arrTwo.length; i++) {
        for (let j = 0; j < arr1[arrTwo[i] % 10].length; j++) {
            if (arrTwo[i] === arr2[arrTwo[i] % 10][j]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            arr1[arrTwo[i] % 10].push(arrTwo[i]);
            obj.union.push(arrTwo[i]);
        }
    }

    for (let i = 0; i < arrTwo.length; i++) {
        for (let j = 0; j < arr2[arrTwo[i] % 10].length; j++) {
            if (arr2[arrTwo[i] % 10][j] === arrTwo[i]) {
                obj.intersection.push(arrTwo[i]);
            }
        }
    }

    return obj;
};

export default getIntersectionUnion;