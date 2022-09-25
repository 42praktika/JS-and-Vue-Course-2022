const transformFortyTwo = (numbers) => {
    // Начало
    const nums = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 42 === 0) {
            nums[i] = 'forty two!';
        } else nums[i] = numbers[i];
    }
    return nums;
    // Конец
};

export default transformFortyTwo;