const getHammingWeight = (num) => {
    // Начало
    let oneCol = 0;
    while (num > 0) {
        if (num % 2 !== 0) {
            oneCol++;
        }
        num = Math.floor(num / 2);
    }
    return oneCol;


    // Конец
};

export default getHammingWeight;