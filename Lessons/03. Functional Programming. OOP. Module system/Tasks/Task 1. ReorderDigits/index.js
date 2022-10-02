const reorderDigits = (type, ...numbers) => {
    // Начало
    numbers = [...new Set(numbers)];
    if(type === "asc"){
        return numbers.sort(function(a, b){return a - b});
    }
    return numbers.sort(function(a, b){return b - a});
    // Конец
};

export default reorderDigits;