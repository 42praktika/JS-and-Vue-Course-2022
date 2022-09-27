const reorderDigits = (type, ...numbers) => {
    if (numbers.isEmpty) return numbers;
    if (type === "asc") {
        numbers.sort(function (a, b) {
            return a - b;
        });
    }
    if (type === "desc") {
        numbers.sort(function (a, b) {
            return b - a;
        });
    }
    return numbers;
};

export default reorderDigits;