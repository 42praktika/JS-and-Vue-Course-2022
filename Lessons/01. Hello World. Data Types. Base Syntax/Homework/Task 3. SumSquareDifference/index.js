const sumSquareDifference = (num) => {
    // Начало
    const SumofSquares = (n) => {
        let sum = 0;
        for (let i = 1; i <= n; i++){
            sum += i * i;
        }
        return sum;
    };

    const SquaresofSum = (n) => {
        let sum = 0;
        for (let i = 1; i <= n; i++){
            sum += i;
        }
        return sum * sum;
    };

    const res = SquaresofSum(num) - SumofSquares(num);
    return res;
    // Конец
};

export default sumSquareDifference;