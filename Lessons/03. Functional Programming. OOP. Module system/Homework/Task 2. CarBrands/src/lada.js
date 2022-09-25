import CarBrand from './carBrand';

class LadaBrand extends CarBrand {
    // Начало
    constructor(model, power, timeTo100, location) {
        super(model, power, timeTo100);
        this.model = 'Lada ' + this.model;
        this.location = location;
    };
    getLocation() {
        return `${this.model} is located in ${this.location}`
    };
    // Конец
}

export default LadaBrand;