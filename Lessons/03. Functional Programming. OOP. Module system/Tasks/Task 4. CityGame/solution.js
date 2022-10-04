class CityGame {
    // Начало
    constructor(playerOne, playerTwo) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.cities = [];
    }

    play(cityName) {
        if (this.cities.length === 0) {
            this.cities.push(cityName);
            return this.cities;
        }
        const lastCity = this.cities[this.cities.length - 1];
        const lastCityLetter = lastCity.slice(-1);
        const newCityFirstLetter = cityName[0];
        const isCityCorrect = lastCityLetter.toLowerCase() === newCityFirstLetter.toLowerCase();
        if (isCityCorrect) {
            this.cities.push(cityName);
            return this.cities;
        } else {
            const winner = this.cities.length % 2 === 0
                ? this.playerTwo
                : this.playerOne;

            return `Game over! The winner is ${winner}`;
        }

    }

    restart() {
        this.cities = [];
        return 'The game has been restarted!';
    }

    // Конец
}

export default CityGame;