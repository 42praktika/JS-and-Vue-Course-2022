const reorderDigits = (str, ...array) => {
    const func = (p) => {
        return (a, b) => {
            if (p >= 1) {
                return a > b ? 1 : b > a ? -1 : 0;
            }
            else {
                return a > b ? -1 : b > a ? 1 : 0;
            }
        }
    }

    if (str === 'asc') {
        return array.sort(func(1))
    }
    else {
        return array.sort(func(-1))
    }
}

export default reorderDigits;