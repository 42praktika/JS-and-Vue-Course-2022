const getLastWordLength = (str) => {
    let newStr=str.trim();
    let answer=0;
    for (let i=newStr.length-1;i>=0;i--) {
        if (newStr[i]!==String.fromCharCode(32)) {
            answer++;
        }
        else{
            break;
        }
    }
    return answer;
};

export default getLastWordLength;