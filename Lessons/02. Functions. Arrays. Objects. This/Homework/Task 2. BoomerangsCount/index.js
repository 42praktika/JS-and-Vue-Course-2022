const getBoomerangsCount = (numbers) => {

    let counter = 0;

    for (let i = 2; i < numbers.length; i++) {
        if(numbers[i-1] != numbers[i] && numbers[i-2] === numbers[i]) {
            counter++;
        }
    }
    return counter;
};

export default getBoomerangsCount;