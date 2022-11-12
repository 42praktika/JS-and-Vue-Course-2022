const daysInMonthsNonLeapYear = {
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

const daysInFebruary = {
    'leapYear': 29,
    'nonLeapYear': 28,
}

const months = Object.keys(daysInMonthsNonLeapYear);

const contains = (arr, elem) => {
    return arr.indexOf(elem) !== -1;
}

const getDaysAmount = (month, year) => {
    // Начало

    if (!contains(months, month)) {
        return 'error';
    }

    if (month === 'February') {
        if (year % 4 === 0) {
            return daysInFebruary.leapYear;
        } else {
            return daysInFebruary.nonLeapYear;
        }
    }

    return daysInMonthsNonLeapYear[month];
    // Конец
};

export default getDaysAmount;
