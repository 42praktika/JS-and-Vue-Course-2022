const isTicketHappy = (num) => {
    // Начало
    let firstHalf = 0;
    let secondHalf = 0;
    for(let i = 0; i < num.length/2; i++){
        firstHalf += num[i];
    }
    for(let i = num.length/2; i < num.length; i++){
        secondHalf += num[i];
    }
    if(firstHalf === secondHalf){
        return true;
    }
    return false;
    // Конец
};

export default isTicketHappy;