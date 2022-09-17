const getHammingWeight = (num) => {
    // Начало
    var count = 0;
    let binary = num.toString(2);
    for (let step = 0; step <= binary.length; step++) {
        if (Number(binary[step])  === 1) {
             count++;
        }
    }
    return count;
    // Конец
};

export default getHammingWeight;