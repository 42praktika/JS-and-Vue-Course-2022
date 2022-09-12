const roundAndRootNumber = (num) => {
    // Начало
    if (num < 0) {
        return 'error';
    }
    return String(Math.floor(Math.sqrt(num) * 100) / 100);
    // Конец
};

export default roundAndRootNumber;