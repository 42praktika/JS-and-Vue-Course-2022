const isTicketHappy = (num) => {
    // Начало
    let sum1 = 0;
    let sun2 = 0;
    if (num.length % 2 === 0) {
        for (let i = 0; i < (num.length) / 2; i++) {
            sum1 += parseInt(num[i]);
        }
        for (let j = (num.length) / 2; j < num.length; j++) {
            sun2 += parseInt(num[j]);
        }
        if (sum1 === sun2) {
            return true;
        }
        else {
            return false;
        }
    }
    // Конец
};

export default isTicketHappy;