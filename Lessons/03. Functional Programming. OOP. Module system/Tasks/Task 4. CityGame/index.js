class CityGame {
    // Начало
    constructor(name1,name2){
       this.name1=name1;
       this.name2=name2;
       this.сities =[];
       this.city2 = '';
   }
    
    play(city){
    if(this.cities.length===0){
    this.cities.push(city);
    }
    else{
        city2=city;
    for (var i = 0; i>0; i++) {
    if (this.cities[i].charAt(this.cities[i].length - 1) === this.city2.charAt(0).toLowerCase()) {
        this.city2.push(city);
    } else {
        if(i%2==0){
      return 'Game over! The winner is '+ this.name2;
    }
    else{
        return 'Game over! The winner is '+ this.name1;
    }
   }
  }}}
  restart(){
    this.сities =[];
    this.city2 = '';
        return "The game has been restarted!";
    }
    // Конец
}

export default CityGame;