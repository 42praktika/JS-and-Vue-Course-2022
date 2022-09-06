const changeCase = (str) => {
    // Начало
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === str.charAt(i).toLowerCase()) {
            newStr += str.charAt(i).toUpperCase();
        } else if (str.charAt(i) === str.charAt(i).toUpperCase()) {
            newStr += str.charAt(i).toLowerCase()
        }
    }
    return newStr;

    // Конец
};

export default changeCase;