const getIntersectionUnion = (arrOne, arrTwo) => {
    // Начало
     let intersection=[];
     let union=[];

    function inArray(value, arr) {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] == value) {
            return true;
        }
    }
    return false;
    }

     for (var i = 0; i < arrOne.length; i++) {
        if(inArray(arrOne[i], arrTwo)) {
            intersection.push(arrOne[i]);
        }
        else if(!inArray(arrOne[i], union)){
            union.push(arrOne[i]);
        }
    }

    for (var i = 0; i < arrTwo.length; i++) {
        if(!inArray(arrTwo[i], union)) {
            union.push(arrTwo[i]);
        }
    }
    
    let newArrays = {
        intersection: intersection,
        union: union
    };
    
    return newArrays;
    // Конец
};

export default getIntersectionUnion;