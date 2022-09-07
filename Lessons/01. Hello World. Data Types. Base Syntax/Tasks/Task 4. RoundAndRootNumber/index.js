const roundAndRootNumber = (num) => {
    // Начало
    if (num < 0) {
        return 'error';
    } else {
        let sqrt = Math.sqrt(num);
        return (Math.floor(sqrt * 100) / 100).toString();
    }
    // Конец
};

export default roundAndRootNumber;