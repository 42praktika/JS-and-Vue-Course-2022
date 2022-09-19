const isTicketHappy = (num) => {
    let sumL = 0;
    let sumR = 0;
    for (let i = 0; i < (num.length / 2); i++) {
        sumL += Number(num[i]);
    }
    for (let i = 0; i < (num.length / 2); i++) {
        sumR += Number(num[i]);
    }
    if(sumR === sumL) {
        return true;
    }
    else {
        return false;
    }
};

export default isTicketHappy;