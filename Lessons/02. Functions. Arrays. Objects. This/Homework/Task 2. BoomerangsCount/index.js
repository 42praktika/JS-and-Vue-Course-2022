const getBoomerangsCount = (numbers) => {
    // Начало
    let col = 0;
    for (let i = 0; i < numbers.length - 2; i++) {
        if (numbers[i] !== numbers[i + 1] && numbers[i] === numbers[i + 2] && numbers[i + 2] !== numbers[i + 1]) {
            col++;
        }

    }
    return col;
    // Конец
};

export default getBoomerangsCount;