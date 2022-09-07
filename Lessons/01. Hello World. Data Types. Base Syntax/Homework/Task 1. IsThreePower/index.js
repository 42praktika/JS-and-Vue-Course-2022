const isThreePower = (num) => {
    // Начало
    var step = 0;
    while (3 ** step <= num) {
        if (num === 3 ** step) {
            return true;
            break;
        }
        step++;
    }
    return false;
    // Конец
};

export default isThreePower;