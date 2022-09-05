const isTicketHappy = (num) => {
    // Начало
    let half_of_legth = num.length / 2
    let first_half = num.slice(0, half_of_legth).split('').reduce((a, b) => a + parseInt(b), 0)
    let second_half = num.slice(half_of_legth, num.length).split('').reduce((a, b) => a + parseInt(b), 0)
    return first_half === second_half;
    // Конец
};

export default isTicketHappy;