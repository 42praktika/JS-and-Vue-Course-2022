const sumSquareDifference = (num) => {
    // Начало
    let sumSq = 0;
    let sum = 0;
    let sqSum = 0
    for (let i = 1; i <= num; i++) {
        sumSq += i ** 2;
    }
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    sqSum = sum ** 2;
    let result = sqSum - sumSq;
    return result;
    // Конец
};

export default sumSquareDifference;