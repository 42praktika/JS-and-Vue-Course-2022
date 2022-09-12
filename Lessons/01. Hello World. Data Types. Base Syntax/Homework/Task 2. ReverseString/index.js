const reverseString = (str) => {
    // Начало
    return str === '' ? '' : reverseString(str.slice(1)) + str[0];
    // Конец
};

export default reverseString;