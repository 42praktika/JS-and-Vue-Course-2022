const reverseString = (str) => {
    // Начало
    if (str.length < 2){
        return str;
    }
    return reverseString(str.slice(1, str.length)) + str.charAt(0);
    // Конец
};

export default reverseString;