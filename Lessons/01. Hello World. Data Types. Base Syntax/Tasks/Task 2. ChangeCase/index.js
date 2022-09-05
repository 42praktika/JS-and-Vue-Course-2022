const changeCase = (str) => {
    // Начало
    let string = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === str[i]) {
            string += str[i].toUpperCase()
        } else {
            string += str[i].toLowerCase()
        }
    }
    return string
    // Конец
};

export default changeCase;