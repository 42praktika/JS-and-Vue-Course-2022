const moreFunction = (number) => {
    // Начало
    return function (arr) {
        return arr.map(item => {
            return item/ number
        })
        return arr;
    }
    // Конец
};
export default moreFunction;