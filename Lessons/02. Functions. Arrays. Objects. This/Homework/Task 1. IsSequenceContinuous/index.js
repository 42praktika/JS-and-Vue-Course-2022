const isSequenceContinuous = (numbers) => {
    // Начало
 if (numbers.length === 0 || numbers.length === 1) {
        return false;
    }
   else{
    for(let i = 0; i < numbers.length; i++) {
        if (numbers[0]+i !== numbers[i]) {
                return false;
            }
    }
    return true;
}
    // Конец
};



export default isSequenceContinuous;
