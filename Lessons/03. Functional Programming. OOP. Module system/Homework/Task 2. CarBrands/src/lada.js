import CarBrand from './carBrand';

class LadaBrand extends CarBrand {
    // Начало
    constructor(model, power, time_to_100, place) {
        super(model, power, time_to_100);
        this.model = 'Lada ' + model;
        this.time_to_100 = time_to_100;
        this.place = place;
    }

    getLocation() {
        return this.model + ' is located in ' + this.place;
    }

    // Конец
}

export default LadaBrand;