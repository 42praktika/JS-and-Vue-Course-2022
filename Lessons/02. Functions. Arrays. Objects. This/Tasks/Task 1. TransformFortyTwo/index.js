const transformFortyTwo = (numbers) => {
    // Начало
    return numbers.map((number) => (number % 42 === 0) ? ('forty two!') : (number))
    // Конец
};

export default transformFortyTwo;