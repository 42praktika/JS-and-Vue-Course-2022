const isThreePower = (num) => {
    // Начало
    for (i = 0; i <= num; i++) {
        if (3**i === num) {
            return 'true (3^'+ i + ')';
        }
    }
    return 'false'
    // Конец
};

export default isThreePower;