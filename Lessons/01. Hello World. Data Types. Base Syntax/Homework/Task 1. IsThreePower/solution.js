const isThreePower = (num) => {
    // Начало
    let current = 1;
    while (current < num) {
        current *= 3;
    }
    return current === num;
    // Конец
};

export default isThreePower;