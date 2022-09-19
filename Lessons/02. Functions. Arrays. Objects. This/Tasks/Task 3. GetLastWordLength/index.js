const getLastWordLength = (str) => {
    let words = str.trim().split(' ');
    return (words.length === 0) ? 0 : words[words.length - 1].length;
};

export default getLastWordLength;