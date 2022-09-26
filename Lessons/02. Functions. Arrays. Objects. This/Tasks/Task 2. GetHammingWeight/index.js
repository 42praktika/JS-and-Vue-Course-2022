const getHammingWeight = (num) => {
    // Начало
    var count = 0;
    while (num > 0) {
        count += num % 2;
        num = (num - num % 2) / 2;
    }
    return count;
    // Конец
};

export default getHammingWeight;