const isThreePower = (num) => {
    if (num === 1) {
        return true;
    } else {
        while (num > 1) {
            num = num / 3;
        }
        if (num === 1) {
            return true;
        } else {
            return false;
        }
    }
};

export default isThreePower;