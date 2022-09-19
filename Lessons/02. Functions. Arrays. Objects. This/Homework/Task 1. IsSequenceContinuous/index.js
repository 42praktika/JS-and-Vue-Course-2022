const isSequenceContinuous = (numbers) => {
    let res = false
    for (let i = numbers.length - 1; i > 0; i--) {
        if (numbers[i] - numbers[i - 1] === 1) {
            res = true
        }
        else if (numbers.length === 1 || numbers.length === 0) {
            res = false
            break
        }
    }
    return res
};

export default isSequenceContinuous;