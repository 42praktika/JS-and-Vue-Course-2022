const months30 = ['April','June', 'September', 'November'];
const months31 = ['January','March', 'May', 'July', 'August', 'October', 'December'];

const getDaysAmount = (month, year) => {
    // Начало
    if (months30.includes(month) == true ){
        return 30;
    }

    else if (month == 'February'){
        if (year % 4 == 0) { return 29; }
        return 28;
    }

    else if (months31.includes(month) == true ){
        return 31;
    }
    
    else{
        return 'error';
    }
    // Конец
};

export default getDaysAmount;