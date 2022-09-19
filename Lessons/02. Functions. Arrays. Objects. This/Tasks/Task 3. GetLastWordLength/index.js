const getLastWordLength = (str) => {
    str = str.trim();
    if (str.indexOf(" ") === -1) return str.length;
    let i, count = 0;
    for (i = str.length - 1; i >= 0; i--) {
        if (str[i] !== " ") count++;
        else break;
    }
    return count;
};

export default getLastWordLength;