const sumSquareDifference = (num) => {
    // Начало
    let num1 = 0;
    let num2 = 0;
    for (let i = 1; i <= num; i++) {
        num1 += i**2
    }
    for (let i = 1; i <= num; i++) {
        num2 += i;
    }
    return (num2**2 - num1);
    // Конец
};

export default sumSquareDifference;