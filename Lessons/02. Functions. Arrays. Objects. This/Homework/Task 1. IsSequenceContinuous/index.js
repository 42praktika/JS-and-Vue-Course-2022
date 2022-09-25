const isSequenceContinuous = (numbers) => {
    // Начало
    if (numbers.length < 2) {
        return false
    }
    let prev = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] - 1 !== prev) {
            return false
        }
        prev = numbers[i]
    }
    return true
    // Конец
};

export default isSequenceContinuous;