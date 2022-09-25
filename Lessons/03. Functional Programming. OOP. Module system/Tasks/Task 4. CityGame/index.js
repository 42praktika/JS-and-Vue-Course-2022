class CityGame {
    // Начало
    constructor(name1 , name2) {
        this.name1 = name1;
        this.name2 = name2;
        this.flag = false;
        this.cities = [];
        this.newCity = '';
    }

    play (city) {
        if (this.flag === false) {
            this.cities.push(city);
            this.flag = true;
        } else {
            this.newCity = city;
            if (this.cities.at(-1).charAt(this.cities.at(-1).length - 1).toLowerCase() === this.newCity.charAt(0).toLowerCase()) {
                this.cities.push(this.newCity);
            } else {
                if (this.cities.length % 2 === 0) {
                    return 'Game over! The winner is ' + this.name2;
                } else {
                    return 'Game over! The winner is ' + this.name1;
                }
            }
        }
        return this.cities;
    }

    restart(){
        this.flag = false;
        this.cities = [];
        this.newCity = '';
        return "The game has been restarted!";
    }
    // Конец
}

export default CityGame;