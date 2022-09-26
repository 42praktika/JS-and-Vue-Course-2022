const getLastWordLength = (str) => {
    // Начало
    str = str.trim();
    var count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            count = 0;
        }
        else {
            count += 1;
        }
    }
    return count;
    // Конец
};

export default getLastWordLength;