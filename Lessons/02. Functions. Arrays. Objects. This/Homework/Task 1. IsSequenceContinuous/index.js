const isSequenceContinuous = (numbers) => {
    // Начало
    var flag = false;
    if (numbers.length === 1) {
        return false;
    }
    for (let i = numbers.length - 1; i > 0; i--) {
        if (numbers[i] - numbers[i -1] === 1) {
            flag = true;
        } else {
            flag = false;
            break;
        }
    }
    return flag;
    // Конец
};

export default isSequenceContinuous;