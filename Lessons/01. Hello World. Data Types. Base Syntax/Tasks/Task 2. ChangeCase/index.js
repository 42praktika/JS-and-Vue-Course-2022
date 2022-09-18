const changeCase = (str) => {
    // Начало
 let str2 = '';
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === str.charAt(i).toLowerCase()) {
            str2 += str.charAt(i).toUpperCase();
        } else if (str.charAt(i) === str.charAt(i).toUpperCase()) {
            str2 += str.charAt(i).toLowerCase()
        } else {
            str2 += str.charAt(i);
        }
    }
    return(str2);
    // Конец
};
export default changeCase;