const roundAndRootNumber = (num) => {
    let answer = "";
    if (num < 0) return "error";
    let sqrt = Math.sqrt(num);
    if (sqrt % 1 === 0) answer += sqrt;
    else
    {
        answer += Math.floor(sqrt) + ".";
        sqrt -= Math.floor(sqrt);
        answer += String(sqrt)[2] + String(sqrt)[3];
    }
    return answer
};

export default roundAndRootNumber;
