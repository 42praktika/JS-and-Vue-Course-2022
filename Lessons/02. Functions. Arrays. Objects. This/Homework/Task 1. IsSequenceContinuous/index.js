const isSequenceContinuous = (numbers) => {

    for (let i = 1; i < numbers.length; i++) {
        if(numbers[i] - numbers[i-1] != 1) {
            return false;
        }
    }
    if(numbers.length < 2) {
        return false;
    }
    else {
        return true;
    }
};

export default isSequenceContinuous;