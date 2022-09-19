const changeCase = (str) => {
    let retStr = ""
    for (let i = 0; i < str.length; i++) {
        let isUpper = str[i].toUpperCase() === str[i]
        if (isUpper) retStr += str[i].toLowerCase();
        else retStr += str[i].toUpperCase();
    }
    return retStr;
};

export default changeCase;
