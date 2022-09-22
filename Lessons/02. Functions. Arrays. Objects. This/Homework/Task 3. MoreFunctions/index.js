const moreFunction = (number) => {
    return function newFunction(array) {
        for (let i = 0; i < array.length; i++) {
            array[i] = array[i] / number
        }
        return array;
    }
}

export default moreFunction;