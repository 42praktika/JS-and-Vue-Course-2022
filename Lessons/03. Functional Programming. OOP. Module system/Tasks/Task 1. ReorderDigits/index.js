const reorderDigits = (type, ...numbers) => {
    // Начало
    if (numbers.length > 1) {
        if (type === 'asc') {
            return numbers.sort((a, b) => a - b);
        } else {
            return numbers.sort((a, b) => b - a);
        }
    } else return numbers;
    // Конец
};

export default reorderDigits;