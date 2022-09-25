const getHammingWeight = (num) => {
    // Начало
var binNum = num.toString(2);
var weight = 0;
    while(binNum>0) {
        weight += binNum % 10;
        binNum/=10;
    }
    return Math.trunc(weight);
    // Конец
};

export default getHammingWeight;