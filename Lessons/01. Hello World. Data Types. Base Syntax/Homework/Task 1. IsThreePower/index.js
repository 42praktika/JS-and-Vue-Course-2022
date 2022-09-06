const isThreePower = (num) => {
    // Начало
    for (let i = 0; i < 10; i++) {
        if ((num ** (1 / i)) === 3 || (num === 1)) {
            return true;
        }
    }
    return false;
    // Конец
};

export default isThreePower;