const reverseString = (str) => {
    // Начало

    let len = str.length;
    let strReverse = '';
    for (let i = len; i >= 0; i--) {
        strReverse += str.charAt(i);
    }
    return strReverse;
    // Конец
};

export default reverseString;