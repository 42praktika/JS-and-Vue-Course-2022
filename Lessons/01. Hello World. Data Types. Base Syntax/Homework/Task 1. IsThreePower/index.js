const isThreePower = (num) => {
    // Начало
   let num2 = 1;
    while (num2 < num) {
        num2 *= 3;
    }
    if (num2 === num) {
        return true;
    } else return false;
    // Конец
};
export default isThreePower;