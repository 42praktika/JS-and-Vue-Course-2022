const sumSquareDifference = (num) => {
    // Начало
    let sumpow = 0;
    let powsum = 0;
    for (let i = 1; i <= num; i++){
        sumpow += i * i;
        powsum += i;
    }
    return powsum * powsum - sumpow;
    // Конец
};

export default sumSquareDifference;