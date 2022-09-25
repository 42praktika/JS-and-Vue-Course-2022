const getLastWordLength = (str) => {
    // Начало
    let trimmedStr = str.trim();
    let splitted = trimmedStr.split(' ');
    return splitted[splitted.length - 1].length;
    // Конец
};

export default getLastWordLength;