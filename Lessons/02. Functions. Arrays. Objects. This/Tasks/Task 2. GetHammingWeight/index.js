const getHammingWeight = (num) => {
    // Начало
    let result = 0;
    while (num > 0) {
        if (num % 2) {
            result++;
        }
        num = parseInt(num / 2);
    }
    return result
    // Конец
};

export default getHammingWeight;