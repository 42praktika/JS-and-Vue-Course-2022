const itisCool = (begin, end) => {
  for (let i = begin; i <=end; i++){
       if (begin > end) {
    return;
  }
 if(i%3==0 && i%5==0){
   console.log('ItisCool');
 }
  else if(i%5==0){
   console.log('Cool');
 }
  else if(i%3==0){
   console.log('Itis');
 }
  else{console.log(i);
    
  }
}
}
    // Конец

export default itisCool;