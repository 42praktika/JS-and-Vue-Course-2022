const reorderDigits = (type, ...numbers) => {
    // Начало

    if (type === 'asc') {
        numbers.sort( (a, b) => a - b );
    }
    else {
        numbers.sort( (a, b) => a - b );
        numbers.reverse()
    }
    return numbers
    // Конец
};

export default reorderDigits;