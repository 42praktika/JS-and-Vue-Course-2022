const roundAndRootNumber = (num) => {
    // Начало
    if (num < 0) {
        return 'error';
    }
    let sqrtNum = Math.sqrt(num)
    return '' + (Math.floor(sqrtNum * 100)) / 100;
    // Конец
};

export default roundAndRootNumber;