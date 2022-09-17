const sumSquareDifference = (num) => {
    let firstsum=0;
    let secondesum=0;
    for (let i=1;i<=num;i++) {
        firstsum+=i**2;
    }
    for (let j=1;j<=num;j++) {
        secondesum+=j;
    }
    return secondesum**2-firstsum;
};

export default sumSquareDifference;