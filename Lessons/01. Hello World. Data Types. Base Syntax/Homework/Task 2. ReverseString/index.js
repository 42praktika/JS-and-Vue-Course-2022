const reverseString = (str) => {
    if (str.length<2){
        return str;
    } else {
        return reverseString(str.substring(1))+str.charAt(0);
    }
};

export default reverseString;
