const getHammingWeight = (num) => {
    // Начало
    var count = 0;
    var binNum = num.toString(2);
    for (let i = 0; i < binNum.length;i++){
        if (binNum[i] == '1'){
            count += 1;
        }
    }
    return count;
    // Конец
};

export default getHammingWeight;