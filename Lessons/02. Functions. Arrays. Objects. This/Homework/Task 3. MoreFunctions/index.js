const moreFunction = (number) => {
    // Начало
    const newFunction = (arr) => {
        for (let i = 0; i < arr.length; i++){
            arr[i] = arr[i] / number;
        }
        return arr;
    }
    return newFunction;
    // Конец
};

export default moreFunction;