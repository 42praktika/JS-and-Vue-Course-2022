const isThreePower = (num) => {
    // Начало
    let i = 1;
    while (i < num) {
        i *= 3;
    }
    if (i === num) {
        return true;
    } else return false;
    // Конец
};

export default isThreePower;