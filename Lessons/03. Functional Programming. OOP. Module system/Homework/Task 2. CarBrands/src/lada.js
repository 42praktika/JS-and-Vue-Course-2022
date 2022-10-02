import CarBrand from './carBrand';

class LadaBrand extends CarBrand {
    // Начало
    constructor(model, power, time, location) {
        super();
        this.model = model;
        this.power = power;
        this.time = time;
        this.location = location;
    }

    getLocation() {
        return this.model + " is located in " + this.location;
    }

    // Конец
}

export default LadaBrand;