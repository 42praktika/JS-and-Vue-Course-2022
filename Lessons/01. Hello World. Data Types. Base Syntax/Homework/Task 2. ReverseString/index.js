const reverseString = (str) => {
    let length = str.length === 1 ? 0 : str.length;
    let result = '';

    while (length--) {
        result += reverseString(str[length]);

        if (length === 0) {
            str = result;
        }
    }

    return str;
};

export default reverseString;
