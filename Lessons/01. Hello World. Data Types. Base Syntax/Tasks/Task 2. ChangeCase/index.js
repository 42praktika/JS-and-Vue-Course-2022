const changeCase = (str) => {
    // Начало
    let len = str.length;
    let str1 = '';
    for (let i = 0; i <= len; i++) {
        if (str.charAt(i) === str.charAt(i).toUpperCase()) {
             str1 += str.charAt(i).toLowerCase();
        } else if (str.charAt(i) === str.charAt(i).toLowerCase()) {
             str1 += str.charAt(i).toUpperCase();
        }
    }
    return str1;
    // Конец
};

export default changeCase;