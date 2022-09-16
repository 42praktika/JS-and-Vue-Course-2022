const changeCase = (str) => {
    let result = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            result += str[i].toLowerCase()
        } else {
            result += str[i].toUpperCase()
        }
    }
    return result;
};
changeCase('')
changeCase('Hello, World!');
changeCase('I loVe itis');
export default changeCase;