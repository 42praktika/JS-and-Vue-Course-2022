const reverseString = (str) => {
    // Начало
    if (str === ''){
        return str;
    } else {
        return reverseString(str.substring(1))+str.charAt(0);
    }


    // Конец
};

export default reverseString;