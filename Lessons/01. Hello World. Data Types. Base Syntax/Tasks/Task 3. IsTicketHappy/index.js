const isTicketHappy = (num) => {
    // Начало
    let mid = num.length / 2;
    let len = num.length;
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < mid; i++) {
        count1 = count1 + Number(num[i]);
    }
    for (let i = mid; i < len; i++) {
        count2 = count2 + Number(num[i]);
    }
    return (count2 === count1);

    // Конец
};

export default isTicketHappy;