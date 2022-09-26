const getHammingWeight = (num) => {
    let counter = 0;

    while (num > 0) {
        if(num % 2 === 1) {
            counter++;
        }
        num = Math.floor(num/2);
    }
    return counter;
};

export default getHammingWeight;