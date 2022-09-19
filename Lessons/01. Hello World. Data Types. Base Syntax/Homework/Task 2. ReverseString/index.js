const reverseString = (str) => {
    let lngth = str.length === 1 ? 0 : str.length;
    let zeroStr = '';
    while(lngth--) {
        zeroStr += reverseString(str[lngth]);
        if(lngth === 0) {
            str = zeroStr;
        }
    }
    return str;
};

export default reverseString;