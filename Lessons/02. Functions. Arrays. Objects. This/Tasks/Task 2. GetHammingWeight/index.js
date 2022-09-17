
const getHammingWeight = (num) => {
    let count=0;
    let big=num.toString(2);
    let intbig=Number(big);
    let massiv=Array.from(String(intbig),Number);
    for (let i=0;i<massiv.length;i++) {
        count+=massiv[i];
    }
    return count;

};
getHammingWeight(0);
getHammingWeight(4);
getHammingWeight(101);

export default getHammingWeight;
