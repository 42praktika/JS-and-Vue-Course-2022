const changeCase = (str) => {
    let zeroStr = ""
    for (let i = 0; i < str.length; i++) {
        let checkUp = str[i].toUpperCase() === str[i]
        if(checkUp) zeroStr += str[i].toLowerCase();
        else zeroStr += str[i].toUpperCase();
    }
    return zeroStr;
};

export default changeCase;