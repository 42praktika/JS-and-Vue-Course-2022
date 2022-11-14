const daysInEachMonth = {
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

const months = Object.keys(daysInEachMonth);

const daysInFebruary = {
    'leapYear': 29,
    'notALeapYear': 28,
}



const getDaysAmount = (month, year) => {
    if (daysInEachMonth[month] === 30 || daysInEachMonth[month] === 31) {
        return daysInEachMonth[month]
    }
    else if (month === 'February') {
        if (year % 4 === 0) {
            return daysInFebruary.leapYear
        }
        else {
            return daysInFebruary.notALeapYear
        }
    }
    else {
        return 'error'
    }
};

export default getDaysAmount;