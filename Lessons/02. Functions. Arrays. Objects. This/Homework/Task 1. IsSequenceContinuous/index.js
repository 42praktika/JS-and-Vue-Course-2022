const isSequenceContinuous = (numbers) => {
    // Начало
    if (numbers.length > 1) {
        let counter = 0;
        for (let i = 0; i < numbers.length - 1; i++) {
            let savedNum = numbers[i] + 1;
            if (numbers[i + 1] === savedNum) {
                counter++;
            }
        }
        if (counter + 1 === numbers.length) {
            return true;
        } else return false;
    } else return false;
    // Конец
};

export default isSequenceContinuous;