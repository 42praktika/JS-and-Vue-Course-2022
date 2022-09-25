const moreFunction = (number) => {
    // Начало
    return function(arr){
        for(let i = 0; i < arr.length; i++){
            arr[i]/=number;
        }
        return arr;
    }
    // Конец
};

export default moreFunction;