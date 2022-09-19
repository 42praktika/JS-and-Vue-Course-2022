const roundAndRootNumber = (num) => {
    let zeroStr = "";
    if (num < 0) {
        return "error";
    }
    let sqrt = Math.sqrt(num);
    if (sqrt % 1 === 0) {
        zeroStr += sqrt;
    }
    else {
        zeroStr += Math.floor(sqrt) + ".";
        sqrt -= Math.floor(sqrt);
        zeroStr += String(sqrt)[2] + String (sqrt)[3];

    }
    return zeroStr;
};

export default roundAndRootNumber;