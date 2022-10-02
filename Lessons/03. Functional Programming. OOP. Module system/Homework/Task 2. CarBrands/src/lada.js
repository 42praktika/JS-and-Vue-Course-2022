import CarBrand from './carBrand';

class LadaBrand extends CarBrand {
    // Начало
    constructor(model, power, time, whereabouts) {
        super(model, power, time);
        this.model = "Lada " + model;
        this.whereabouts = whereabouts;
    }

    getLocation() {
        return this.model + " is located in " + this.whereabouts;
    }
    // Конец
}

export default LadaBrand;