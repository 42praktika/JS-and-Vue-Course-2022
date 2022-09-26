const getBoomerangsCount = (numbers) => {
    // Начало
    let count = 0
    for ( let i = 0; i <= numbers.length - 2; i++) {
        if (numbers[i] === numbers[i+2] && numbers[i] !== numbers[i+1]) {
            count += 1
        }
    }
    return count
    // Конец
};

export default getBoomerangsCount;