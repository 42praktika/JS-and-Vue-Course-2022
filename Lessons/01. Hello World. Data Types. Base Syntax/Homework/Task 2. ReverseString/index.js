const reverseString = (str) => {
    // Начало
    while (str.length != 0) {
        newstr += str[-1];
        str = str.slice(-str.length, -1);
        reverseString(str);
    }

    // Конец
};

let newstr = "";
export default reverseString;