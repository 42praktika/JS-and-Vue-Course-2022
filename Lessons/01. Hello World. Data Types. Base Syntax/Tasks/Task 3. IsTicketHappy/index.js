const isTicketHappy = (num) => {
    // Начало
  let a=0;
  let b=0;
       for(let i=0;i < (num.length)/2;i++){
          a+= Number(num[i]);
       }
       console.log(num.length - 1)
       console.log(i < (num.length / 2))

       for (let i=num.length - 1; i > (num.length / 2); i++) {
        console.log('i', i)
    b+= Number(num[i]);
  }
  console.log('a', a)
  console.log('b', b)
  return Boolean(a==b);
  // Конец
};
export default isTicketHappy;