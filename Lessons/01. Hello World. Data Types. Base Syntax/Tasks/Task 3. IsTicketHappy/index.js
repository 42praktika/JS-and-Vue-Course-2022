const isTicketHappy = (num) => {
    let sumLeft = 0;
    let sumRight = 0;
    for (let i = 0; i < num.length / 2; i++) {
        sumLeft += Number(num[i]);
    }
    for (let i = num.length / 2; i < num.length; i++) {
        sumRight += Number(num[i]);
    }
    return sumRight === sumLeft;
};

export default isTicketHappy;