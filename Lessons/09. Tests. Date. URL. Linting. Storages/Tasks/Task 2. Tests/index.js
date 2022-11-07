const getIsFirstArrayCooler = (numsOne, numsTwo) => {
    if (numsOne.length !== numsTwo.length) {
        return false;
    }

    const difference = numsOne.reduce((acc, num, index) => {
        if (num > numsTwo[index]) {
            return acc + 1;
        } else if (num < numsTwo[index]) {
            return acc - 1;
        } else {
            return acc;
        }
    }, 0);

    return difference > 0;
};

export default getIsFirstArrayCooler;