class CityGame {
    constructor(name1, name2) {
        this.name1 = name1;
        this.name2 = name2;
    }
    queue = '';
    cities = [];
    play(city) {
        if (this.queue === this.name2) this.queue = this.name1;
        else this.queue = this.name2;
        if (city.length != 0) {
            if (this.cities.length === 0) {
                this.cities.push(city)
            }
            else {
                if (this.cities[this.cities.length - 1].slice(-1) == city[0].toLowerCase()){
                    this.cities.push(city)
                }
                else {
                    return 'Game over! The winner is ' + this.queue;
                }
            }
        }
        return this.cities;
    }
    restart() {
        this.queue = this.name1;
        this.cities = [];
        return 'The game has been restarted!';
    }

}

export default CityGame;