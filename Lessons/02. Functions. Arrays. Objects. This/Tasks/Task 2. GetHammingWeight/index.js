const getHammingWeight = (num) => {
    let k = 0;
    while (num > 0)
    {
        if (num % 2 === 1) k++;
        num = Math.floor(num / 2);
    }
    return k;
};

export default getHammingWeight;