const getBoomerangsCount = (numbers) => {
    let count = 0;
    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] === numbers[i+2] && numbers[i+1] !== numbers[i]) {
            count += 1
        }
    }
    return count


};
export default getBoomerangsCount;