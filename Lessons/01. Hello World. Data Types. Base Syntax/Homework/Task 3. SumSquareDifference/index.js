const sumSquareDifference = (num) => {
    let sumKv = 0;
    let kvSum = 0;
    for (let i = 1; i <= num; i++) {
        kvSum += i ** 2;
        sumKv += i;
    }
    let res = sumKv ** 2 - kvSum;
    return res;
};

export default sumSquareDifference;