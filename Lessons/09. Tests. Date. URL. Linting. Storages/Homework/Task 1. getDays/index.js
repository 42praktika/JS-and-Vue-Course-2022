const getDaysAmount = (month, year) => {
    // Начало
let daysInMonths = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May:31,
    June:30,
    July:31,
    August:31,
    September:30,
    October:31,
    November:30,
    December:31
}
if (!(month in daysInMonths)){
    return 'error'
}
if (month === 'February'){
    if (year % 4 === 0) {
        return 29
    } else {
        return daysInMonths.February
    }
}
return daysInMonths[month]
    // Конец
};

export default getDaysAmount;