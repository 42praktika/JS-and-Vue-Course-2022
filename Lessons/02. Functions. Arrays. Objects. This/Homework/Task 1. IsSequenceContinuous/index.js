const isSequenceContinuous = (numbers) => {
    // Начало
    if (numbers.length < 2){
        return false;
    }
    for (let i = 0; i < numbers.length-1;i++){
        if (numbers[i] !== numbers[i+1] -1){
            return false;
        }
    }
    return true;
    // Конец
};

export default isSequenceContinuous;