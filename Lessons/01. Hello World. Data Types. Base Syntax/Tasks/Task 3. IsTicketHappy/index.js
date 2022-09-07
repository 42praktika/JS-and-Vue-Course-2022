const isTicketHappy = (num) => {
    // Начало
    var middle = num.length / 2;
    var summ1 = 0;
    var summ2 = 0;
    for (let step = 0; step < middle; step++) {
        summ1 += Number(num.charAt(step));
    }
    for (let step = middle; step < num.length; step++) {
        summ2 += Number(num.charAt(step));
    }
    return (summ1 === summ2);
    // Конец
};

export default isTicketHappy;