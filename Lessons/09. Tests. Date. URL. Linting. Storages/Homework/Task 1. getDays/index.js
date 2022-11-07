const getDaysAmount = (month, year) => {
    // Начало
    const monthIndex = MONTHS[month];
    if (!monthIndex && monthIndex !== 0) {
        return 'error';
    }
    const firstDayOfTheMonth = new Date(year, monthIndex);

    const isLastMonth = monthIndex === MONTHS.December;
    const nextMonthYear = isLastMonth ? year + 1 : year;
    const nextMonth = isLastMonth ? MONTHS.January : monthIndex + 1;
    const firstDayOfTheNextMonth = new Date(nextMonthYear, nextMonth);

    return Math.round((firstDayOfTheNextMonth - firstDayOfTheMonth) / TRANSFORM_COEFFICIENT);
    // Конец
};

export default getDaysAmount;