const getBoomerangsCount = (numbers) => {
    // Начало
    let count = 0;
    if (numbers.length < 3) {
        return count;
    }
    for (let i = 2; i < numbers.length; i++){
        if (numbers[i] == numbers[i - 2] && numbers[i] != numbers[i - 1]){
            count++;
        }
    }
    return count;
    // Конец
};

export default getBoomerangsCount;