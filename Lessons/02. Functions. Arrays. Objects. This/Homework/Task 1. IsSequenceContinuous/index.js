const isSequenceContinuous = (numbers) => {
    // Начало
    if(numbers.length <= 1){
        return false;
    }
    for(let i = 1; i < numbers.length; i++){
        if (numbers[i-1] + 1 !== numbers[i]){
            return false;
        }
    }
    return true;
    // Конец
};

export default isSequenceContinuous;