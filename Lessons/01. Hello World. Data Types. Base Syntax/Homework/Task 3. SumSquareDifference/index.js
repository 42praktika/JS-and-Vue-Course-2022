const sumSquareDifference = (num) => {
    // Начало
    let a =0;
    let b =0;
    for( let i = 1; i <= num; i++){
        a+= Math.pow(i, 2);
    }
    for( let i = 1; i <= num; i++){
        b+=i;
        
    }
    b=b**2;
    return b-a;
    // Конец
};
export default sumSquareDifference;