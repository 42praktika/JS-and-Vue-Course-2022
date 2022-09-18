const isTicketHappy = (number) => {
    // Начало
  let a=0;
  let b=0;
     
       for(let i=0;i < (number.length)/2;i++){
          a+= Number(number[i]);
       }
       console.log(number.length - 1)
       console.log(i < (number.length / 2))

       for (let i=number.length - 1; i > (number.length / 2); i++) {
        console.log('i', i)
    b+= Number(number[i]);
  }
  console.log('a', a)
  console.log('b', b)
  return Boolean(a==b);
  // Конец
};



export default isTicketHappy;