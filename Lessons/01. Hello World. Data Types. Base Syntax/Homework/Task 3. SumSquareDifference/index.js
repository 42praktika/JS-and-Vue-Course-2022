const sumSquareDifference = (num) => {
    // Начало
    let square_of_sum = 0
    let sum_of_squares = 0
    for (let i = 1; i <= num; i++) {
        square_of_sum += i
        sum_of_squares += i ** 2
    }
    square_of_sum = square_of_sum ** 2
    return square_of_sum - sum_of_squares
    // Конец
};

export default sumSquareDifference;