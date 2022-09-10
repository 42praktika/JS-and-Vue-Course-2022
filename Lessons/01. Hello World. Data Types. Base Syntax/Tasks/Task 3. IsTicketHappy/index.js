const isTicketHappy = (num) => {
    // Начало
    let len = num.length;
    var num1 = 0;
    var num2 = 0;
    if (len % 2 !== 0) {
        return null;
    }
    for (let i = 0; i < len/2; i++) {
         num1 += Number(num.charAt(i));
    }
    for (let i = len/2; i < len; i++) {
         num2 += Number(num.charAt(i));
    }
    if (Number(num1) === Number(num2)) {
        return true;
    } else return false;
    // Конец
};

export default isTicketHappy;