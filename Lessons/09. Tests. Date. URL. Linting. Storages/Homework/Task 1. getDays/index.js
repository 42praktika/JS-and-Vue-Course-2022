const monthWith31Days = ['January', 'March', 'May', 'July', 'August', 'October', 'December'];
const monthWith30Days = ['April','June', 'September', 'November'];

const isLeapYear = (year) => {
    if (new Date(year,1,29).getDate() === 29) {
        return 29;
    } else {
        return 28;
    }
}

const getDaysAmount = (month, year) => {
    // Начало
    if (monthWith30Days.includes(month)) {
        return 30;
    } else if (monthWith31Days.includes(month)) {
        return 31;
    } else if (month === 'February') {
        return isLeapYear(year);
    } else {
        return 'error';
    }
    // Конец
};

export default getDaysAmount;