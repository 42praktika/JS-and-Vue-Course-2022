const isTicketHappy = (num) => {
    // Начало
    let balance = 0;

    for (let i = 0, j = num.length - 1; i < j; i += 1, j -= 1) {
        balance += +num[i] - +num[j];
    }
    return balance === 0;
    // Конец
};

export default isTicketHappy;