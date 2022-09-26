const reverseString = (str) => {
    // Начало
    return str.length === 0
        ? str
        : `${str.slice(-1)}${reverseString(str.slice(0, -1))}`;
    // Конец
};

// Высокоуровневое решение
// const reverseString = (str) => str.split('').reverse().join('');

export default reverseString;