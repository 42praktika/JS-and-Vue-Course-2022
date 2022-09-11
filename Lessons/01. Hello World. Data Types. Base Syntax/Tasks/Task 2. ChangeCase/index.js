const changeCase = (str) => {
    let newStr = "", i, s;
    for (i = 0; i < str.length; i++) {
        s = str.charAt(i);
        if (s === s.toLowerCase()) {
            newStr += s.toUpperCase();
        } else {
            newStr += s.toLowerCase();
        }
    }
    return newStr;
};

export default changeCase;