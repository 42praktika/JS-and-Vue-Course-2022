class CityGame {
    // Начало
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
        this.cities = [];
        this.isNull = true;
    }
    play(city){
        if(this.isNull){
            this.cities.push(city);
            this.isNull = false;
        }
        else{
            if(this.cities[this.cities.length-1].charAt(this.cities[this.cities.length-1].length-1) === city.charAt(0).toLowerCase()){
                this.cities.push(city);
            }
            else{
                if(this.cities.length % 2 === 0){
                    return 'Game over! The winner is ' + this.player2;
                }
                return 'Game over! The winner is ' + this.player1;
            }
        }
        return this.cities;
    }
    restart(){
        this.cities = [];
        this.isNull = true;
        return 'The game has been restarted!';
    }
    // Конец
}

export default CityGame;