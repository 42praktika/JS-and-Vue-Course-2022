const getHammingWeight = (num) => {
    let str = num.toString(2);
    let count = 0
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === "1") {
            count += 1
        }
    }
    return count
};
export default getHammingWeight;