const daysInMonthsWithNotLeapYear = {
    'January': 31,
    'February' : 28,
    'March': 31,
    'April': 30,
    'May': 31,
    'June': 30,
    'July': 31,
    'August': 31,
    'September': 30,
    'October': 31,
    'November': 30,
    'December': 31,
}

const daysWithLeapYear = {
    'FebruaryLeapYear': 29,
}
const getDaysAmount = (month, year) => {
    // Начало
    if (daysInMonthsWithNotLeapYear[month] === 30 || daysInMonthsWithNotLeapYear[month] === 31) {
        return daysInMonthsWithNotLeapYear[month];
    } else if (month === 'February') {
        if (year % 4 === 0) {
            return daysWithLeapYear.FebruaryLeapYear;
        }
        return daysInMonthsWithNotLeapYear[month];
    } else {
        return 'error';
    }

    // Конец
};

export default getDaysAmount;