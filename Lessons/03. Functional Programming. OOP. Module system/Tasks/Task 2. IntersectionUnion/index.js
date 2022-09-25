const getIntersectionUnion = (arrOne, arrTwo) => {
    // Начало
    if(arrOne.length===0 || arrTwo.length===0){
        var res={
            intersection:[],
            union:[]
        }
        return res
    } else {
        var setTwo = new Set(arrTwo);
        var peres=( [...new Set(arrOne)].filter(x => setTwo.has(x)));
        let un=[]
        let maxLen = 0
        if (arrOne.length > arrTwo.length){
            maxLen=arrOne.length
        } else{
            maxLen=arrTwo.length
        }
        for (let i = 0; i < arrOne.length; i++) {
            if(!(peres.includes(arrOne[i]))){
                un.push(arrOne[i])
            }}
        for(let i =0; i<arrTwo.length;i++){
            if(!(peres.includes(arrTwo[i]))){
                un.push(arrTwo[i])
            }}
        let ans = {
            intersection: peres,
            union: un
        }
        return ans

        // Конец
    }
};

export default getIntersectionUnion;