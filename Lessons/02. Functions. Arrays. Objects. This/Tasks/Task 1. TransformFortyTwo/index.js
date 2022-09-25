const transformFortyTwo = (numbers) => {
    // Начало
    var newNumbers =[];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 42 === 0) {
            newNumbers[i] = 'forty two!';
        } else {
            newNumbers[i] = numbers[i];
        }
    }
    return newNumbers;

    // Конец
};

export default transformFortyTwo;