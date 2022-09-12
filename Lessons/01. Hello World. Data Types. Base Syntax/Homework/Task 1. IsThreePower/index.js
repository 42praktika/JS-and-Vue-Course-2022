const isThreePower = (num) => {
    // Начало
    let n = 1;
    let pow = 0;
    while (num > n) {
        n = n * 3;
        pow += 1;
    }
    if (num == n) {
        return true;
    }
    else {
        return false;
    }
    // Конец
};

export default isThreePower;