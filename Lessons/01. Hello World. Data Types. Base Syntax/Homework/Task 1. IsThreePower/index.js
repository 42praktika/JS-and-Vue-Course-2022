const isThreePower = (num) => {
    while (num>1) {
        if (num===0) {
            return false;
        }
        else {
            if (num%3===0) {
                num=num/3;
            }
            else {
                return false;
            }
        }
    }
    return num===1;
};


export default isThreePower;