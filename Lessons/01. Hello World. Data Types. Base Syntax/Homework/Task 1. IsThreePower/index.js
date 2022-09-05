const isThreePower = (num) => {
    // Начало
    let result = 1
    while (result < num) {
        result *= 3
    }
    return result === num
    // Конец
};

export default isThreePower;