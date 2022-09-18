const changeCase = (str) => {
    // Начало
    var resString = '';
    for(let i = 0; i < str.length; i++){
        if (str.charAt(i) === str.charAt(i).toLowerCase()) {
            resString += str.charAt(i).toUpperCase();
        } 
        else {
            resString += str.charAt(i).toLowerCase()
        }
    }
    return resString;
    // Конец
};

export default changeCase;