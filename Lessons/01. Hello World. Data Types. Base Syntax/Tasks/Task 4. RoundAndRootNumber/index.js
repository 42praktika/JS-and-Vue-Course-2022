const roundAndRootNumber = (num) => {
    // Начало
    if (num < 0) {
        return 'error'
    }
    let root = num ** 0.5
    return (Math.floor(root * 100) / 100).toString()
    // Конец
};

export default roundAndRootNumber;