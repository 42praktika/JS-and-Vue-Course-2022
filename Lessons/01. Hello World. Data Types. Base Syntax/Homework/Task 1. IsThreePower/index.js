const isThreePower = (num) => {
    // Начало
    for (let i = 0; i <= num/3; i++) {
        if (Math.pow(3,i) === num) {
            return true;
        }
    }
    return false;
    // Конец
};

export default isThreePower;