function changeCase(str) {
    // Начало
    let x = str.length
    let new_str = ''
    for (let i = 1; i <= x; i++) {
        if (x[i] === x[i].toUpperCase()) {
            new_str += x[i].toLowerCase()
        } else {
            new_str += x[i].toUpperCase()
        }
    }
    return new_str
    // Конец
};

export default changeCase;