const getIntersectionUnion = (arrOne, arrTwo) => {

    let intersection = arrOne.filter(count => arrTwo.includes(count));
    let union = [...new Set([...arrOne, ...arrTwo])];
   // let newArray = new Set(arrOne.concat(arrTwo));
    //union = [... newArray];

    return {
        intersection,
        union
    }

};

export default getIntersectionUnion;