const changeCase = (str) => {
    // Начало
    let result = '';
    for (let i = 0; i < str.length; i += 1) {
        const letter = str[i];
        const isUpperCase = letter === letter.toUpperCase();
        result += isUpperCase ? letter.toLowerCase() : letter.toUpperCase();
    }
    return result;
    // Конец
};

export default changeCase;