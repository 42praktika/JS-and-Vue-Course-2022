const getHammingWeight = (num) => {
  let num2 = num.toString(2);
  let a=0;
  for(let i=0; i<num2.length; i++){
    if(Number(num2[i])==1){
        a++;
    }
  }
  return a;
};
export default getHammingWeight;