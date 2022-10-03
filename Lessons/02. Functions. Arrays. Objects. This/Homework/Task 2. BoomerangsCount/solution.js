const isArrayBoomerang = ([ start, middle, end ]) => start === end && start !== middle;

const getBoomerangsCount = (numbers) => {
    // Начало
    let count = 0;
    for (let i = 0; i < numbers.length - 2; i += 1) {
        const subArray = numbers.slice(i, i + 3);
        if (isArrayBoomerang(subArray)) {
            count += 1;
        }
    }
    return count;
    // Конец
};

export default getBoomerangsCount;