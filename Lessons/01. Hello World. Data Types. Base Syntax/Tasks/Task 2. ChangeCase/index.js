const changeCase = (str) => {
    // Начало
    var changeString = '';
    for (let step = 0; step <= str.length; step++) {
        if (str.charCodeAt(step) >= 65 && str.charCodeAt(step) <= 90) {
            changeString += str.charAt(step).toLowerCase();
        } else {
            changeString += str.charAt(step).toUpperCase();
        }
    }
    return changeString;
    // Конец
};

export default changeCase;