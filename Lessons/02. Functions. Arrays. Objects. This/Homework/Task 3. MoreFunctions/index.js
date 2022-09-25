const moreFunction = (number) => {
    // Начало
    return function (array) {
        for (let i = 0; i < array.length; i++) {
            array[i] /= number;
        }
        return array;
    }
    // Конец
};

export default moreFunction;