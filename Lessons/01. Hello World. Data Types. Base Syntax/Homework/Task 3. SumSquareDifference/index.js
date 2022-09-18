const sumSquareDifference = (num) => {
    // Начало
    let sum1 = sum2 = sumSq = 0;
    for(let i = 1; i <= num; i++){
        sum1 += i**2;
        sum2 += i;
    }
    sumSq = sum2**2;
    return (sumSq - sum1);
    // Конец
};

export default sumSquareDifference;