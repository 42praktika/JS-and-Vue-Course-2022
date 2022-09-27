const moreFunction = (number) => {
    // Начало
    const oneMorefunction = (numbers) => {
        for (let i = 0; i <= numbers.length; i++) {
            numbers[i] = numbers[i]/number
        }
    }
    return numbers
    // Конец
};

export default moreFunction;