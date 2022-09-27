import {h} from "vue";

class CityGame {
    // Начало
    constructor(human1, human2) {
        this.human1 = human1;
        this.human2 = human2;
        this.arrOfCities = [];
        this.secondCity = '';
    }

    play(city) {
        if (this.arrOfCities.length === 0) {
            this.arrOfCities.push(city);
        } else if (this.arrOfCities !== 0) {
            this.secondCity = city;
            if (this.arrOfCities[this.arrOfCities.length - 1].charAt(this.arrOfCities[this.arrOfCities.length - 1].length - 1) === this.secondCity.charAt(0).toLowerCase()) {
                this.arrOfCities.push(this.secondCity);
            } else if (this.arrOfCities.length % 2 === 0) {
                return `Game over! The winner is ${this.human2}`;
            } else return `Game over! The winner is ${this.human1}`;
        }
        return this.arrOfCities;
    }
    restart() {
        this.arrOfCities = [];
        this.secondCity = '';
        return 'The game has been restarted!';
    }
}
    // Конец


export default CityGame;