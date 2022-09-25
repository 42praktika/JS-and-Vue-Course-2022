const getHammingWeight = (num) => {
    // Начало
    const binary = num.toString(2);
    const binaryArray = binary.split("");
    let sum = 0;
    for (let i = 0; i < binaryArray.length; i++) {
        if (binaryArray[i] === "1") {
            sum++;
        }
    }
    return sum;
    // Конец
};

export default getHammingWeight;