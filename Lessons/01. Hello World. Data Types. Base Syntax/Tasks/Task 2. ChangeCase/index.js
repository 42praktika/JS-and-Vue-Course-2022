const changeCase = (str) => {
    // Начало
    let len = str.length;
    let result = '';
    for (let i = 0; i < len; i++) {
        if (str[i] === str[i].toLowerCase()) {
            result += str[i].toUpperCase();
        }
        else if (str[i] === str[i].toUpperCase()) {
            result += str[i].toLowerCase();
        }
    }
    return result;
    // Конец
};

export default changeCase;