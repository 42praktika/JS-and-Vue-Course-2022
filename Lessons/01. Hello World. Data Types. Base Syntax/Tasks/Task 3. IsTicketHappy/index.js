const isTicketHappy = (num) => {
    let i, sum1 = 0, sum2 = 0;
    for (i = 0; i < num.length / 2; i++) {
        sum1 += Number(num.charAt(i));
        sum2 += Number(num.charAt(num.length - 1 - i));
    }
    return sum1 === sum2;
};

export default isTicketHappy;