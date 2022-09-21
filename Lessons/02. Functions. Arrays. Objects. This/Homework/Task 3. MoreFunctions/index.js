const moreFunction = (number) => {
    // Начало
    const newFunction = (arrayOfNumbers) => {
        for (let i = 0; i < arrayOfNumbers.length; i++) {
            arrayOfNumbers[i] = arrayOfNumbers[i] / number;
        }
        return arrayOfNumbers;
    }
    return newFunction;
    // Конец
};


export default moreFunction;