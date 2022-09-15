const isTicketHappy = (num) => {
    // Начало
    let array = (""+num).split("").map(Number);
    let first = 0;
    let second = 0;
    for (let i = 0; i < array.length / 2; i++) {
        second += array[i];
    }
    for (let i = array.length / 2; i < array.length ; i++) {
        first += array[i];
    }
    if (first === second) {
        return true;
    } else {
        return false;
    }
    // Конец
};

export default isTicketHappy;