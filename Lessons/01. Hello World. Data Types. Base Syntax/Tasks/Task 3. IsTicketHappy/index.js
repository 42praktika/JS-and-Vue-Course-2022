const isTicketHappy = (num) => {
    // Начало
    var fhalf = 0;
    var shalf = 0;
    for (var i = 0; i < num.length / 2; i++) {
        fhalf += parseInt(num[i], 10);
    }
    for (var i = num.length / 2; i < num.length; i++) {
        shalf += parseInt(num[i], 10);
    }
    if (fhalf === shalf) {
        return (true);
    }
    else {
        return (false);
    }
    // Конец
};

export default isTicketHappy;