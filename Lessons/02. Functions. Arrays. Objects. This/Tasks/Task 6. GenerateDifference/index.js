const generateDifference = (objOne, objTwo) => {
    let keys1 = Object.keys(objOne)
    let values1 = Object.values(objOne)
    let keys2 = Object.keys(objTwo)
    let values2 = Object.values(objTwo)
    let map = new Map();
    for (let i = 0; i < keys1.length; i++) {
        let flag = false;
        for (let j = 0; j < keys2.length; j++) {
            if (keys2[j] === keys1[i]) {
                flag = true
                if (values2[j] === values1[i]) {
                    map.set(keys1[i], "unchanged")
                } else {
                    map.set(keys1[i], "changed")
                }
            }
        }
        if (!flag) {
            map.set(keys1[i], "deleted")
        }
    }
    for (let j = 0; j < keys2.length; j++) {
        let count = 0;
        for (let i = 0; i < keys1.length; i++) {
            if (keys2[j] === keys1[i]) {
                count++;
            }
        }
        if (count === 0) {
            map.set(keys2[j], "added")

        }
    }
    return Object.fromEntries(map)
};

export default generateDifference;
