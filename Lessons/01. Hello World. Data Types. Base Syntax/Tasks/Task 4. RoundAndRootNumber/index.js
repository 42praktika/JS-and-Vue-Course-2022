const roundAndRootNumber = (num) => {
    // Начало
    if(num < 0){
        return 'error';
    }
    let numSq = Math.sqrt(num);
    numSq = Math.trunc(numSq*100) / 100;
    return numSq.toString();
    // Конец
};

export default roundAndRootNumber;