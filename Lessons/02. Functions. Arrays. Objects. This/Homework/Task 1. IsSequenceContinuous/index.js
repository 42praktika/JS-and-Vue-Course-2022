const isSequenceContinuous = (numbers) => {
    if (numbers.length < 2) {
        return false
    }
    for (let i = 0; i < numbers.length - 1; i++) {
        if (Math.abs(numbers[i] - numbers[i+1]) !== 1) {
            return false
        }
    }
    return true
}

export default isSequenceContinuous;