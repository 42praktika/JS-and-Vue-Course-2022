const isTicketHappy = (num) => {
    // Начало
    let num_len = num.length;
    var sum1 = 0;
    var sum2 = 0;
    for (let i = 0; i < num_len/2; i++){
        sum1 += Number(num.charAt(i));
    }
    for (let j = num_len/2;j < num_len; j++){
        sum2 += Number(num.charAt(j));
    }
    if (Number(sum1) === Number(sum2)){
        return true;
    }
    else return false;
    // Конец
};

export default isTicketHappy;