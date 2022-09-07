const sumSquareDifference = (num) => {
    // Начало
    var sum1 = 0;
    var sum = 0;
    var sqrtsum = 0;
    for (let step = 1; step <= num; step++) {
        sum1 += step**2;
        sum += step;
    }
    sqrtsum = sum**2;
    return (sqrtsum - sum1);
    // Конец
};

export default sumSquareDifference;