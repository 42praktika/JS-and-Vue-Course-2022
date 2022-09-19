const getHammingWeight = (num) => {
    let weight = 0;
    while (num > 0) {
        if (num % 2 === 1) {
            weight++;
        }
        num = Math.floor(num / 2);
    }
    return weight;
};

export default getHammingWeight;