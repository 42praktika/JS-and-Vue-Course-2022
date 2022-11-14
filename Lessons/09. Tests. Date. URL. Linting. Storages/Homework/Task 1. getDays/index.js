const getDaysAmount = (month, year) => {
    // Начало
    function checkYear() {
        if (year % 4 === 0) {
            return 29;
        } else return 28;
    }

    const months = [{name: 'January', count: 31}, {name: 'February', count: checkYear()}, {name: 'March', count: 31},
        {name: 'April', count: 30}, {name: 'May', count: 31}, {name: 'June', count: 30}, {name: 'July', count: 31},
        {name: 'August', count: 31}, {name: 'September', count: 30}, {name: 'October', count: 31},
        {name: 'November', count: 30}, {name: 'December', count: 31},];

    for (let i = 0; i < months.length; i++) {
        if (month === months[i].name) {
            return months[i].count;
        }
    }
    return 'error';

    // Конец
};

export default getDaysAmount;