const sumSquareDifference = (num) => {
    let sumOfSquares = 0, sums = 0;
    for (let i = 1; i <= num; i++) {
        sumOfSquares += i*i;
        sums += i;
    }
    return Math.abs(sums*sums - sumOfSquares);
};

export default sumSquareDifference;