const moreFunction = (number) => {
    // Начало
    return (numbers) => numbers.map(divide);

    function divide(num) {
        return num / number;
    }
    // Конец
};

export default moreFunction;