const getLastWordLength = (str) => {
    let s = str.trim();
    let word = s.split(" ")
    return word[word.length - 1].length;
};

export default getLastWordLength;