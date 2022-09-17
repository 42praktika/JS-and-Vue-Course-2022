const reverseString = (str) => {
    let answer=""
    if (str.length<=1) {
        return str;
    }
    for (let i=str.length-1;i>=0;i--) {
        answer+=str[i];
    }
    return answer
};

export default reverseString;
