const isSequenceContinuous = (numbers) => {
    // Начало
    let count = 0
    for (let i = 0; i <= numbers.length - 1; i++) {
        if (numbers[i+1] - numbers[i] === 1) {
            count = count + 1
        }
    }
    if (count === numbers.length - 1 && numbers.length > 1) {
        return true
    }
    else {
        return false
    }
    // Конец
};

export default isSequenceContinuous;
