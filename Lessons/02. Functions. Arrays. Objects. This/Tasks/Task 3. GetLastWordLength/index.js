const getLastWordLength = (str) => {
    // Начало
    let strwoSpace = str.trim();
    const strSplit = strwoSpace.split(' ');
    return strSplit[strSplit.length - 1].length;
    // Конец
};

export default getLastWordLength;