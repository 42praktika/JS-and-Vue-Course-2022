const getLastWordLength = (str) => {

    str = str.trim().split(' ');
    str = str[str.length - 1];
    return str.length;
};

export default getLastWordLength;