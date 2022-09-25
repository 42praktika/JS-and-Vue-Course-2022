class CityGame {
    // Начало
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
        this.prevPlayer = p2;
        this.cities = [];
    };
    switchPrev() {
        if (this.prevPlayer === this.p1) {
            this.prevPlayer = this.p2;
        } else {
            this.prevPlayer = this.p1;
        }
    };
    play(city) {
        if (this.cities.length === 0) {
            this.cities.push(city);
            this.switchPrev();
            return this.cities
        }
        let lastWord = this.cities[this.cities.length - 1];
        if (lastWord[lastWord.length - 1] !== city[0].toLowerCase()) {
            return `Game over! The winner is ${this.prevPlayer}`
        } else {
            this.cities.push(city);
            this.switchPrev();
            return this.cities
        }
    };
    restart() {
        this.cities = [];
        this.prevPlayer = this.p2;
        return 'The game has been restarted!'
    }
    // Конец
}

export default CityGame;