const isTicketHappy = (number) => {
  let a=0;
  let b=0;
       for(let i=0;i < (number.length)/2;i++){
          a+= Number(number[i]);
       }
       console.log(number.length - 1)

       for (let i=number.length/2; i < number.length; i++) {
    b+= Number(number[i]);
  }
  return Boolean(a==b);
}
export default isTicketHappy;