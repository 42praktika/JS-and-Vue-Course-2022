const transformFortyTwo = (numbers) => {
    // Начало
    return numbers.map(function (num) {
        if (num % 42 == 0) {
            return 'forty two!';
        }
        return num;
    });

    // Конец
};

export default transformFortyTwo;