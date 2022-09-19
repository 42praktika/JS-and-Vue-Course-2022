const sumSquareDifference = (num) => {
    let sqrSum = 0;
    let sumSqr = 0;
    for (let i = 1; i <= num; i++)
    {
        sqrSum += i ** 2;
        sumSqr += i;
    }
    return sumSqr ** 2 - sqrSum;
};

export default sumSquareDifference;
