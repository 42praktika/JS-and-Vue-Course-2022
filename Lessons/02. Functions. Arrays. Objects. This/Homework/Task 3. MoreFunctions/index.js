const moreFunction = (number) => {
    return (numbers) => {
        for (let i = 0; i < numbers.length; i++) {
            numbers[i] = numbers[i] / number;
        }
        return numbers;
    };
};

export default moreFunction;