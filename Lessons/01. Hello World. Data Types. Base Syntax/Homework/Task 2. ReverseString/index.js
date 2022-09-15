const reverseString = (str) => {
    // Начало
    let returned = "";
    for (let i = str.length - 1; i > -1; i--) {
        returned += str[i];
    }
    return returned;
    // Конец
};

export default reverseString;