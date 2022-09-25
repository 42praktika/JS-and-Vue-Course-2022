const reorderDigits = (str, ...numbers) => {
    // Начало
    const compareFunction = (order=1) => {
        return (a, b) => {
            if (order < 0) {
                if (a > b) {
                    return -1
                } else if (a === b) {
                    return 0
                } else {
                    return 1
                }
            } else {
                if (a > b) {
                    return 1
                } else if (a === b) {
                    return 0
                } else {
                    return -1
                }
            }
        }
    }
    if (str === 'asc') {
        return numbers.sort(compareFunction())
    } else {
        return numbers.sort(compareFunction(-1))
    }
    // Конец
};

export default reorderDigits;