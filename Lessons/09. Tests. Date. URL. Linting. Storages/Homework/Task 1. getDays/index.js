const months31Days = ['January', 'March', 'May', 'July', 'August', 'October', 'December'];
const months30Days = ['April', 'June', 'September', 'November'];
const getDaysAmount = (month, year) => {
    if (months30Days.includes(month)) {return 30}
    if (months31Days.includes(month)) {return 31}
    if (year%4===0 && month==="February") {return 29}
    if (year%4!==0 && month==="February") {return 28}
    return 'error'
};

export default getDaysAmount;