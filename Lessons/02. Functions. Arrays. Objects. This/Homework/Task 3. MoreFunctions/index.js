const moreFunction = (number) => {
    const newFunction  = (array) => {
        for (let i = 0; i < array.length; i++) {
            array[i] = array[i] / number;
        }
        return array
    }
    return newFunction
};


export default moreFunction;