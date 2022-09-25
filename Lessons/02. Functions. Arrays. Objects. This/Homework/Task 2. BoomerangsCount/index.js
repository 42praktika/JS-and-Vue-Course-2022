const getBoomerangsCount = (numbers) => {
    // Начало
    let count = 0;
    if (numbers.length >= 3) {
        for (let i = 0; i < numbers.length - 2; i++) {
            if (numbers[i] === numbers[i+2] && numbers[i] !== numbers[i+1]) {
                count++;
            }
        }
    }
    return count;
    // Конец
};

export default getBoomerangsCount;