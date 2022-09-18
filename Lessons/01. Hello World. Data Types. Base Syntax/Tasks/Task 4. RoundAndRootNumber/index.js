const roundAndRootNumber = (num) => {
     if(num==0){
    return '0';
  }
  else if(num>0){
        num=(Math.sqrt(num).toFixed(4) + '');
        let num2 = '';
        for (let i = 0; i < num.length - 2; i++) {
            num2 += num[i];
        }
        return num2;
     }
      else {
        return 'error';
    }
};
export default roundAndRootNumber;