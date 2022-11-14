
const getDaysAmount = (month, year) => {
    // Начало
    const Month = {
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

    if (month == 'February'){
        if (year % 4 == 0) {
            return 29;
        }
       else return 28;
    }
    else if (month == 'April' || month == 'June' || month == 'September' || month == 'November' ){
        return 30;
    }
    else if (month == 'January' || month == 'March' || month == 'May' || month == 'July' || month == 'August' || month == 'October' || month == 'December'){
        return 31;
    }
    else{
        return 'error';
    }
    // Конец
};

export default getDaysAmount;