const isThreePower = (num) => {
    while (num >= 1)
    {
        if (num === 3 || num === 1) return true;
        num /= 3;
    }
    return false
};

export default isThreePower;
