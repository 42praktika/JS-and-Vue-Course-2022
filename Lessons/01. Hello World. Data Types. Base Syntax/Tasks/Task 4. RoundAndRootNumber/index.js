const roundAndRootNumber = (num) => {
    // Начало
    let numSq = Math.sqrt(num);
    let numb = numSq * 100
    let roundNum = Math.trunc(numb) / 100;
    if (num >= 0) {
        return (roundNum.toString());
    } else {
        return ("error");
    }
    // Конец
};

export default roundAndRootNumber;