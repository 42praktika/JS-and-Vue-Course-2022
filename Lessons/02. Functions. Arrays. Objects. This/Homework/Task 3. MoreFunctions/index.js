const moreFunction = (number) => {
    return (arr) => {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i] / number;
        }
        return arr;
    }
};

export default moreFunction;