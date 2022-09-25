const getBoomerangsCount = (numbers) => {
    // Начало
    if (numbers.length >= 3) {
        let counter = 0;
        for (let i = 0; i < numbers.length - 2; i++) {
            if (numbers[i] === numbers[i + 2] && numbers[i] !== numbers[i + 1]) {
                counter++;
            }
        }
        return counter;
    } else return 0;
    // Конец
};

export default getBoomerangsCount;