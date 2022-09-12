const isThreePower = (num) => {
    // Начало
    if (num === 0) return false
    if (num === 1) return true
    let q = num / 3, r = num % 3
    if (q === 1) return true
    if (r !== 0) return false
    return isThreePower(q)
    // Конец
};

export default isThreePower;