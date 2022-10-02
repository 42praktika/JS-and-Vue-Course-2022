class CityGame {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.cities = [];
    }

    play(city) {
        this.cities[this.cities.length] = city;
        if (this.cities.length > 1)
        {
            if (this.checkCity(city)) return this.cities;
            else return `Game over! The winner is ${this.checkWinner()}`;
        }
        else return this.cities;
    }

    checkCity(city) {
        let lastCity = this.cities[this.cities.length - 2];
        return lastCity[lastCity.length - 1].toUpperCase() === city[0].toUpperCase();
    }

    checkWinner() {
        return this.cities.length % 2 === 0 ? this.player1 : this.player2;
    }

    restart() {
        this.cities = [];
        return "The game has been restarted!";
    }
}

export default CityGame;