const moreFunction = (number) => {
    // Начало
return function (numbers){
    var arr= numbers
    for (let i = 0; i < arr.length; i++) {
        arr[i]=numbers[i]/number
    }
    return arr
}
    // Конец
};

export default moreFunction;