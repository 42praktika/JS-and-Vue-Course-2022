import CarBrand from './carBrand';

class LadaBrand extends CarBrand {
    // Начало
    constructor(name, horsePowers, oneToHundred, location) {
        super(name, horsePowers, oneToHundred);
        this.name = `Lada ${name}`;
        this.location = location;
    }

    getLocation() {
        return `${this.name} is located in ${this.location}`;
    }

    // Конец
}

export default LadaBrand;