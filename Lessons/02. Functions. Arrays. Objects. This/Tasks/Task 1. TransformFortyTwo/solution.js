const isDividedToFortyTwo = (num) => num % 42 === 0;
const fortyTwoStr = 'forty two!';

const transformFortyTwo = (numbers) => numbers
    .map((num) => isDividedToFortyTwo(num) ? fortyTwoStr : num);

export default transformFortyTwo;