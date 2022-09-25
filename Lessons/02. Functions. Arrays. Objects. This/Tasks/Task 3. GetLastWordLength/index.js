const getLastWordLength = (str) => {
    // Начало
    str = str.trim();
    const words = str.split(' ');
    return words[words.length - 1].length;
    // Конец
};

export default getLastWordLength;