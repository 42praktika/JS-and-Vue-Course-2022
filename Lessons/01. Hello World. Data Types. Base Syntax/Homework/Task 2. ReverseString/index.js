const reverseString = (str) => {
    // Начало
    if (str === "") {
        return "";
    } else {
        return reverseString(str.slice(1, str.length)) + str.charAt(0);
    }
    // Конец
};

export default reverseString;