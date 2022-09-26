const transformFortyTwo = (numbers) => {

    return numbers.map((num) => (num % 42 === 0) ? "forty two!" : num);
};

export default transformFortyTwo;