const getLastWordLength = (str) => {
    // Начало
    let str2 = str.trim();
    let allStr = str2.split(" ");
    return allStr[allStr.length - 1].length;
    // Конец
};

export default getLastWordLength;