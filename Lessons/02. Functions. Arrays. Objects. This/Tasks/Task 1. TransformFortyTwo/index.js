const transformFortyTwo = (numbers) => {
    // Начало
    let new_arr = []
    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] === 42) {
            delete numbers[i];
            new_arr.push('forty two!');
        }
        else {
            new_arr.push(numbers[i])
        }
    }
    return new_arr
    // Конец
};
export default transformFortyTwo;