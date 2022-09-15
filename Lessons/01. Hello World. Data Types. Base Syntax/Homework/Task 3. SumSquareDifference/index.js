const sumSquareDifference = (num) => {
    // Начало
    let first = 0;
    let second = 0;
    for (let i = 0; i <= num; i++) {
        first += Math.pow(i, 2);
        second += i;
    }
    return Math.pow(second, 2) - first;
    // Конец
};

export default sumSquareDifference;