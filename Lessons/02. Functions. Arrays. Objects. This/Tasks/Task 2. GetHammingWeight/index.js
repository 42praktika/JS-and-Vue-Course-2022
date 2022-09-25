const getHammingWeight = (num) => {
    // Начало
    let res = 0;
    let binNum = num.toString(2);
    for(let i = 0; i < binNum.length; i++){
        if(Number(binNum[i]) === 1){
            res++;
        }
    }
    return res;
    // Конец
};

export default getHammingWeight;