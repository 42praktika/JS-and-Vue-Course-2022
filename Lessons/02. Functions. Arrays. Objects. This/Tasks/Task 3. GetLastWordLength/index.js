const getLastWordLength = (str) => {
    // Начало
    let newStr = str.trim();
    let words = newStr.split(" ");

    return words[(words.length) - 1].length;
    // Конец
};

export default getLastWordLength;