const isSequenceContinuous = (numbers) => {
    let res = false
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i+1] - numbers[i] === 1 && numbers[i+1] > numbers[i]) {
            res = true
        }
        else{
            res = false
        }
    }
    return res
};
console.log(isSequenceContinuous([]))
// export default isSequenceContinuous;