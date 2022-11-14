const months = {
    'January': 1,
    'February': 2,
    'March': 3,
    'April': 4,
    'May': 5,
    'June': 6,
    'July': 7,
    'August': 8,
    'September': 9,
    'October': 10,
    'November': 11,
    'December': 12
}

const getDaysAmount = (month, year) => {
    // Начало
    const date = new Date();
    if (months[month] === undefined) {
        return 'error'
    } else {
        date.setFullYear(year, months[month], 0);
    }
    return date.getUTCDate();
    // Конец
};

export default getDaysAmount;