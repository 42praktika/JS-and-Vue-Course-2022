const sumSquareDifference = (num) => {
    // Начало
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 1; i <= num; i++) {
        sum1 += i ** 2;
    }
    for (let j = 1; j <= num; j++) {
        sum2 += j;
    }
    return sum2 ** 2 - sum1;
    // Конец
};

export default sumSquareDifference;