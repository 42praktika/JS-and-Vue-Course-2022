const getBoomerangsCount = (numbers) => {
    // Начало
    let col=0;
    if (numbers.length === 0 || numbers.length === 1 || numbers.length === 2) {
        return 0;
    }
   else{
    for(let i = 0; i < numbers.length; i++) {
    let numbers2=numbers.slice(i,i+3);
          if(numbers2[0]===numbers2[2] && numbers2[0]!== numbers2[1]){
            col++;
        }
   }
   return col;
}
    // Конец
};

export default getBoomerangsCount;

