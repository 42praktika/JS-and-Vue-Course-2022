const monthWith30Days = ['April','June', 'September', 'November'];
const monthWith31Days = ['January', 'March', 'May', 'July', 'August', 'October', 'December'];
const getDaysAmount = (month, year) => {

    if(monthWith31Days.includes(month)) {
        return 31;
    }
    if(monthWith30Days.includes(month)) {
        return 30;
    }
    if(month === 'February' && year%4===0) {
        return 29;
    }
    if(month === 'February' && year%4!==0) {
        return 28;
    }
    else {
        return 'error';
    }

};

export default getDaysAmount;