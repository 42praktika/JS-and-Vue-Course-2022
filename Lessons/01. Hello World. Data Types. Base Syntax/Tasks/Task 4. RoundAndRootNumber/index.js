const roundAndRootNumber = (num) => {
    if (num<0) {
        return  'error'
    }
    else {
        var sqrt=Math.sqrt(num)
        var answer=(Math.trunc(sqrt*100)/100)
        return answer.toString();

    }
};
roundAndRootNumber(5843);
roundAndRootNumber(18248);
roundAndRootNumber(0);
roundAndRootNumber(5);
roundAndRootNumber(-100);
export default roundAndRootNumber;

