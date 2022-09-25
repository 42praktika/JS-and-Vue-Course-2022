const getBoomerangsCount = (numbers) => {
    // Начало
    let result = 0;
    if (numbers.length < 3) {
        return result
    }
    for (let i = 3; i <= numbers.length; i++) {
        let boom = numbers.slice(i - 3, i);
        if (boom[0] === boom[2] && boom[0] !== boom[1]) {
            result += 1;
        }
    }
    return result
    // Конец
};

export default getBoomerangsCount;