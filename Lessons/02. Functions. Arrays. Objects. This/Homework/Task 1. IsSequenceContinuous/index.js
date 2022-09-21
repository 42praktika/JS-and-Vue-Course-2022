const isSequenceContinuous = (numbers) => {
    // Начало
    if (numbers.length === 1 || numbers.length === 0) {
        return false;
    }
    for (let i = 0; i < numbers.length - 1; i++) {
        if (Math.abs(numbers[i] - numbers[i + 1]) !== 1) {
            return false;
        }
    }
    return true;
    // Конец
};

export default isSequenceContinuous;